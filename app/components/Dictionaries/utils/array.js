import { save } from '../../../utils/localStorage';

export const findDictionary = (uuid, dictionaries) => dictionaries.find((item) => item.uuid === uuid);

export const existsByKey = (array, object, key) => {
  const exists = (el) => el[key] === object[key];
  return array.some(exists);
};

export const insert = (state, model) => ([
  ...state.items, model
]);

export const update = (state, model) => {
  const objIndex = state.items.findIndex((obj) => obj.uuid === model.uuid);
  state.items = [
    ...state.items.slice(0, objIndex),
    model,
    ...state.items.slice(objIndex + 1),
  ];

  return state.items;
};

export const remove = (state, model) => {
  const newItems = state.items.filter((item) => item.uuid !== model.uuid);
  state.items = newItems;
  return state.items;
};

export const addDomain = (state, dictionary, domain) => {
  const objIndex = state.items.findIndex((obj) => obj.uuid === dictionary.uuid);
  const currentItem = state.items[objIndex];

  let updatedObj = {};
  // if we have reason it's invalid
  if (domain.reason) {
    updatedObj = {
      ...currentItem,
      domains: {
        valids: currentItem.domains.valids,
        invalids: [...currentItem.domains.invalids, domain]
      }
    };
  } else {
    updatedObj = {
      ...currentItem,
      domains: {
        invalids: currentItem.domains.invalids,
        valids: [...currentItem.domains.valids, domain]
      }
    };
  }

  state.items = [
    ...state.items.slice(0, objIndex),
    updatedObj,
    ...state.items.slice(objIndex + 1),
  ];

  save(dictionary.uuid, findDictionary(dictionary.uuid, state.items));

  return state.items;
};

export const removeDomain = (state, domain) => {
  const objIndex = state.items.findIndex((obj) => obj.uuid === domain.dictionary);
  const currentItem = state.items[objIndex];

  const type = domain.reason ? 'invalids' : 'valids';
  currentItem.domains[type] = currentItem.domains[type].filter((obj) => obj.uuid !== domain.uuid);

  state.items = [
    ...state.items.slice(0, objIndex),
    currentItem,
    ...state.items.slice(objIndex + 1),
  ];

  save(currentItem.uuid, currentItem);

  return state.items;
};

export const getByUUID = (dictionaries, uuid) => dictionaries.find((item) => item.uuid === uuid);
