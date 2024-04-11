// Importing the problem2 function
const problem2 = require('../problem2');
// Importing the inventory array
const inventory = require('../script');
//For negative test if inventory is not array
const inventoryString = 'invalid';
//For negative test if inventory array is empty 
const inventoryy = [];

// Describe block to test problem2
describe('Problem2 function', () => {
  // Test case for the function
  it('should return last car details', () => {
    // Assertion to check if the function returns the correct result
    expect(problem2(inventory)).toEqual({"id":50,"car_make":"Lincoln","car_model":"Town Car","car_year":1999});
  });
  it('should return error if inventory is not array type', () => {
    // expecting error as inventory passed is of type string instead of array
    expect(problem2(inventoryString)).toEqual('arr must be typeof Array');
  });
  it('should return error as length is less than 0', () => {
    // Expecting error as length should be greater than 0
    expect(problem2(inventoryy)).toEqual('arr must have length greater than 0');
  });
});
