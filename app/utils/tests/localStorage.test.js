import { save, get } from '../localStorage';

describe('localStorage', () => {
  it('should save', () => {
    expect(() => save('test', { test: 'test' }).toBe({ test: 'test' }));
  });

  it('should get', () => {
    save('test', { test: 'test' });
    expect(() => get('test').toBe({ test: 'test' }));
  });
});
