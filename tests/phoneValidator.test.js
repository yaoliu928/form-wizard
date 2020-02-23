const {
  isPhoneValid,
} = require('../src/script');

describe('Phone number', () => {
  it('Should return true if input matches the format ', () => {
    expect(isPhoneValid('0322 999 999')).toBeTruthy();
  });
  it('Should return false if input not match the format ', () => {
    expect(isPhoneValid('0322999999')).toBeFalsy();
  });
  it('Should return false if input includes letters', () => {
    expect(isPhoneValid('azAZ')).toBeFalsy();
  });
  it('Should return false if input is blank ', () => {
    expect(isPhoneValid('')).toBeFalsy();
  });
})
