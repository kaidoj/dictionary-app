import { ADD_DICTIONARY } from '../types';

export const addDictionary = (dictionary) => ({
  type: ADD_DICTIONARY,
  dictionary,
});
