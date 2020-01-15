import { REMOVE_DOMAIN } from '../types';

export const removeDomain = (domain) => ({
  type: REMOVE_DOMAIN,
  domain,
});
