import { validateName } from '../utils/validation';

describe('validateName', () => {
  it('should return true', () => {
    expect(() => validateName('').toBe(true));
  });

  it('should return false', () => {
    expect(() => validateName('test').toBe(false));
  });
});
