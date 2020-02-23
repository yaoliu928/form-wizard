const {
  isFormatValid,
  isEmailValid,
  isPhoneValid,
  isPostcodeValid,
  isStreetNumValid,
  isTextValid,
} = require('../src/script');

describe('Choose validator', () => {
  it('Case email should choose isEmailValid ', () => {
    expect(isFormatValid('email')).toEqual(isEmailValid());
  });
})