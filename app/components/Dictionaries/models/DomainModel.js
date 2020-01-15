import uuidv1 from 'uuid/v1';

class DomainModel {
  constructor(dictionary, domain, range, reason) {
    this.uuid = uuidv1();
    this.dictionary = dictionary;
    this.domain = domain;
    this.range = range;
    this.reason = reason;
  }
}

export default DomainModel;
