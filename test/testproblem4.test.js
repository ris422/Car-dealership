// Importing the problem4 function
const problem4 = require('../problem4');
// Importing the inventory array
const inventory = require('../script');
// Array of car's manufacture year only
const CarYears = [
    2009, 2001, 2010, 1983, 1990, 1995,
    2009, 1987, 1996, 2000, 2004, 2004,
    1997, 1999, 2000, 2001, 1987, 1995,
    1994, 1985, 2003, 1997, 1992, 2003,
    2005, 2005, 2000, 2005, 1993, 2010,
    1964, 1999, 2011, 1991, 2000, 2003,
    1997, 1992, 1998, 2012, 1965, 1996,
    2009, 2012, 2008, 1995, 2007, 2008,
    1996, 1999
  ]
//For negative test if inventory is not array
const inventoryString = 'invalid';
// Describe block to test problem2
describe('Problem4 function', () => {
  // Test case for the function
  it('should return manufacture year array', () => {
    // expecting array of cars manufacture year array
    expect(problem4(inventory)).toEqual(CarYears);
  });
  it('should return error if inventory is not array type', () => {
    // expecting error as inventory passed is of type string instead of array
    expect(problem4(inventoryString)).toEqual('arr must be typeof Array');
  });
});
