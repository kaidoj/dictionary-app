import uuidv1 from 'uuid/v1';

class DictionaryModel {
  constructor(name) {
    this.uuid = uuidv1();
    this.name = name;
    this.domains = {
      valids: [],
      invalids: []
    };
  }
}

export default DictionaryModel;
