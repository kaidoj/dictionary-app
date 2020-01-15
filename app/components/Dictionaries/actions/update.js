import { UPDATE_DICTIONARY } from '../types';

export const udpateDictionary = (dictionary) => ({
  type: UPDATE_DICTIONARY,
  dictionary,
});
