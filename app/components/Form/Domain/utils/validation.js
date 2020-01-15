export const REASON_DUPLICATE = {
  key: 'duplicate',
  name: 'Duplicate',
  desc: 'Duplicate Domain - Range pairs',
  color: '#EF7674'
};
export const REASON_CYCLE = {
  key: 'cycle',
  name: 'Cycle',
  desc: 'Two or more rows in a dictionary result in cycles, resulting in a never-ending transformation.',
  color: '#BA0303'
};
export const REASON_FORK = {
  key: 'fork',
  name: 'Fork',
  desc: 'Duplicate Domains with different Ranges: Two rows in the dictionary map to different values, resulting in an ambiguous transformation.',
  color: '#E83333'
};
export const REASON_CHAIN = {
  key: 'chain',
  name: 'Chain',
  desc: 'A chain structure in the dictionary (a value in Range column also appears in Domain column of another entry), resulting in inconsistent transformation.',
  color: '#DA344D'
};

const checkExists = (array, domain, range) => {
  const found = array.find((item) => item.domain === domain && item.range === range);
  if (found) {
    return found.reason;
  }

  return false;
};

const checkDuplicate = (array, domain, range) => {
  const reason = array.some((item) => {
    if (item.domain === domain && item.range === range) {
      return true;
    }
    return false;
  });

  if (reason) {
    return REASON_DUPLICATE;
  }

  return reason;
};

const checkFork = (array, domain) => {
  const reason = array.some((item) => {
    if (item.domain === domain) {
      return true;
    }
    return false;
  });

  if (reason) {
    return REASON_FORK;
  }

  return reason;
};

const checkCycle = (array, domain, range) => {
  const reason = array.some((item) => {
    if (item.domain === range && item.range === domain) {
      return true;
    }
    return false;
  });

  if (reason) {
    return REASON_CYCLE;
  }

  return reason;
};

const checkChain = (array, domain, range) => {
  const reason = array.some((item) => {
    if (item.domain === range) {
      return true;
    }

    if (reason) {
      return REASON_CHAIN;
    }

    return false;
  });

  if (reason) {
    return REASON_CHAIN;
  }

  return reason;
};

export const validateDomain = (dictionary, domain, range) => {
  let reason = '';
  // Exists in invalids already we don't go any further
  reason = checkExists(dictionary.domains.invalids, domain, range);
  if (reason) {
    return reason;
  }

  // If already exists in valids
  reason = checkDuplicate(dictionary.domains.valids, domain, range);
  if (reason) {
    return reason;
  }

  reason = checkFork(dictionary.domains.valids, domain);
  if (reason) {
    return reason;
  }

  reason = checkCycle(dictionary.domains.valids, domain, range);
  if (reason) {
    return reason;
  }

  reason = checkChain(dictionary.domains.valids, domain, range);
  if (reason) {
    return reason;
  }

  return reason;
};

export const isEmpty = (value) => (value === '');
export const isMatch = (value1, value2) => (value1 === value2);
