const {
  isFormatValid,
  isEmailValid,
  isPhoneValid,
  isPostcodeValid,
  isStreetNumValid,
  isTextValid,
} = require('../src/script');

test('postcode', () => {
  expect(isPostcodeValid(4000)).toBeTruthy();  
});