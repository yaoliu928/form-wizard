const {
  isPostcodeValid
} = require('../script');


test('postcode', () => {
  expect(isPostcodeValid(4000)).toBeTruthy();  
});