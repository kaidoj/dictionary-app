import { ADD_DOMAIN } from '../types';

export const addDomain = (dictionary, domain) => ({
  type: ADD_DOMAIN,
  dictionary,
  domain,
});
