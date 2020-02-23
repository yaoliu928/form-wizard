const {
  isFormatValid,
  isEmailValid,
  isPhoneValid,
  isPostcodeValid,
  isStreetNumValid,
  isTextValid,
} = require('../src/script');

describe('postcode', () => {
  it('should return true if 0800<= input <= 7999 ', () => {
    expect(isPostcodeValid(4000)).toBeTruthy();
  });
  it('should return false if input < 0800 or input > 7999 ', () => {
    expect(isPostcodeValid(700)).toBeFalsy();
  });
  it('should return false if input includes letters', () => {
    expect(isPostcodeValid('azAZ')).toBeFalsy();
  });
  it('should return false if input includes special characters ', () => {
    expect(isPostcodeValid('  ')).toBeFalsy();
  });
})
