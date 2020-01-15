import {
  ADD_DICTIONARY,
  REMOVE_DICTIONARY,
  ADD_DOMAIN,
  REMOVE_DOMAIN,
  UPDATE_DICTIONARY
} from '../types';
import {
  insert,
  remove,
  addDomain,
  removeDomain,
  update
} from '../utils/array';
import { getAll, save, remove as removeItem } from '../../../utils/localStorage';

const initialState = {
  items: getAll()
};

const dictionaries = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DICTIONARY:
      save(action.dictionary.uuid, action.dictionary);
      return { ...state, items: insert(state, action.dictionary) };
    case UPDATE_DICTIONARY:
      save(action.dictionary.uuid, action.dictionary);
      return { ...state, items: update(state, action.dictionary) };
    case REMOVE_DICTIONARY:
      removeItem(action.dictionary.uuid);
      return { ...state, items: remove(state, action.dictionary) };
    case ADD_DOMAIN:
      return { ...state, items: addDomain(state, action.dictionary, action.domain) };
    case REMOVE_DOMAIN:
      return { ...state, items: removeDomain(state, action.domain) };
    default:
      return state;
  }
};

export default dictionaries;
