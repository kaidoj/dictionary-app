export const save = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  return data;
};

export const get = (key) => JSON.parse(localStorage.getItem(key));
export const getAll = () => Object.keys(localStorage).map((key) => get(key));
export const remove = (key) => localStorage.removeItem(key);
