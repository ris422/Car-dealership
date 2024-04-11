// Importing the problem1 function
const problem1 = require('../problem1');
// Importing the inventory array
const inventory = require('../script');

// Negative test if inventory is not array
const inventoryy = 'invalid';
// Describe block to test problem1 
describe('Problem1 function', () => {
  // Test case for the function
  it('should find a car object by id(Success Test)', () => {
    // Assertion to check if the function returns the correct result
    expect(problem1(inventory, 2)).toEqual({id: 2, car_make: 'Mazda', car_model: 'Miata MX-5', car_year: 2001});
  });
  it('should return error if inventory is not array type', () => {
    // expecting error as inventory passed is of type string instead of array
    expect(problem1(inventoryy, 2)).toEqual('Inventory should be of type array');
  });
  it('should return error as id passed is less than 0', () => {
    // Expecting error as id should be positive value
    expect(problem1(inventory, -1)).toEqual('Id should be greater than 0');
  });
});
