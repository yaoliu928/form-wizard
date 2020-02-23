const {
  isEmailValid,
} = require('../src/script');

describe('Email', () => {
  it('Should return true if input matches the format ', () => {
    expect(isEmailValid('qwe@123asd.co')).toBeTruthy();
  });
  it('Should return false if input not match the format ', () => {
    expect(isEmailValid('azAZ')).toBeFalsy();
  });
  it('Should return false if input includes special characters except for "@" ', () => {
    expect(isEmailValid('qwe$123asd co')).toBeFalsy();
  });
  it('Should return false if input is blank ', () => {
    expect(isEmailValid('')).toBeFalsy();
  });
})
