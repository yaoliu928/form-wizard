const {
  isTextValid,
} = require('../src/script');

describe('Text', () => {
  it('Should return true if input only has letters and is separated by one space ', () => {
    expect(isTextValid('az AZ')).toBeTruthy();
  });
  it('Should return false if input includes numbers ', () => {
    expect(isTextValid(700)).toBeFalsy();
  });
  it('Should return false if input includes more than two spaces ', () => {
    expect(isTextValid('   ')).toBeFalsy();
  });
  it('Should return false if input is blank ', () => {
    expect(isTextValid('')).toBeFalsy();
  });
})