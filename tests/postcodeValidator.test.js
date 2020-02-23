const {
  isPostcodeValid,
} = require('../src/script');

describe('Postcode', () => {
  it('Should return true if 0800<= input <= 7999 ', () => {
    expect(isPostcodeValid(4000)).toBeTruthy();
  });
  it('Should return false if input < 0800 or input > 7999 ', () => {
    expect(isPostcodeValid(700)).toBeFalsy();
  });
  it('Should return false if input includes floats ', () => {
    expect(isPostcodeValid(700.99)).toBeFalsy();
  });
  it('Should return false if input includes letters', () => {
    expect(isPostcodeValid('azAZ')).toBeFalsy();
  });
  it('Should return false if input includes special characters ', () => {
    expect(isPostcodeValid('  ')).toBeFalsy();
  });
  it('Should return false if input is blank ', () => {
    expect(isPostcodeValid('')).toBeFalsy();
  });
})
