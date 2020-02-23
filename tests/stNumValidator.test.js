const {
  isStreetNumValid,
} = require('../src/script');

describe('Street number', () => {
  it('Should return true if input is a positive integer ', () => {
    expect(isStreetNumValid(123)).toBeTruthy();
  });
  it('Should return false if input is a negative number ', () => {
    expect(isStreetNumValid(-12)).toBeFalsy();
  });
  it('Should return false if input is zero ', () => {
    expect(isStreetNumValid(0)).toBeFalsy();
  });
  it('Should return false if input includes floats ', () => {
    expect(isStreetNumValid(12.3)).toBeFalsy();
  });
  it('Should return false if input includes letters', () => {
    expect(isStreetNumValid('azAZ')).toBeFalsy();
  });
  it('Should return false if input includes special characters ', () => {
    expect(isStreetNumValid('* @')).toBeFalsy();
  });
  it('Should return false if input is blank ', () => {
    expect(isStreetNumValid('')).toBeFalsy();
  });
})
