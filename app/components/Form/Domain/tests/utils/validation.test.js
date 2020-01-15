import {
  validateDomain,
  REASON_DUPLICATE,
  REASON_FORK,
  REASON_CYCLE,
  REASON_CHAIN
} from '../../utils/validation';
import DictionaryModel from '../../../../Dictionaries/models/DictionaryModel';
import DomainModel from '../../../../Dictionaries/models/DomainModel';

describe('validateDomain', () => {
  it('should return valid', () => {
    const dictionary = new DictionaryModel('test');
    dictionary.domains.invalids = [new DomainModel(dictionary.uuid, 'test', 'test2', REASON_DUPLICATE)];
    expect(validateDomain(dictionary, 'test1', 'test3')).toBe(false);
  });

  it('should return existing invalid reason', () => {
    const dictionary = new DictionaryModel('test');
    dictionary.domains.invalids = [new DomainModel(dictionary.uuid, 'test', 'test2', REASON_DUPLICATE)];
    expect(validateDomain(dictionary, 'test', 'test2')).toBe(REASON_DUPLICATE);
  });

  it('should return duplicate reason for valids', () => {
    const dictionary = new DictionaryModel('test');
    dictionary.domains.valids = [new DomainModel(dictionary.uuid, 'test', 'test2', '')];
    expect(validateDomain(dictionary, 'test', 'test2')).toBe(REASON_DUPLICATE);
  });

  it('should return fork reason for valids', () => {
    const dictionary = new DictionaryModel('test');
    dictionary.domains.valids = [
      new DomainModel(dictionary.uuid, 'test', 'test23', '')
    ];
    expect(validateDomain(dictionary, 'test', 'test2')).toBe(REASON_FORK);
  });

  it('should return cycle reason for valids', () => {
    const dictionary = new DictionaryModel('test');
    dictionary.domains.valids = [
      new DomainModel(dictionary.uuid, 'test2', 'test', '')
    ];
    expect(validateDomain(dictionary, 'test', 'test2')).toBe(REASON_CYCLE);
  });

  it('should return chain reason for valids', () => {
    const dictionary = new DictionaryModel('test');
    dictionary.domains.valids = [
      new DomainModel(dictionary.uuid, 'test2', 'test3', '')
    ];
    expect(validateDomain(dictionary, 'test223', 'test2')).toBe(REASON_CHAIN);
  });
});
