import { REMOVE_DICTIONARY } from '../types';

export const removeDictionary = (dictionary) => ({
  type: REMOVE_DICTIONARY,
  dictionary,
});
