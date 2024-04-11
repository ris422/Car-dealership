// Importing the problem6 function
const problem6 = require('../problem6');
// Importing inventory 
const inventory = require('../script');
// Storing the successfull response for audi and bmw cars array
const AudiandBMW = [{ id: 6, car_make: 'Audi', car_model: 'riolet', car_year: 1995 },
{ id: 8, car_make: 'Audi', car_model: '4000CS Quattro', car_year: 1987},
{ id: 25, car_make: 'BMW', car_model: '525', car_year: 2005 },
{ id: 30, car_make: 'BMW', car_model: '6 Series', car_year: 2010 },
{ id: 44, car_make: 'Audi', car_model: 'Q7', car_year: 2012 },
{ id: 45, car_make: 'Audi', car_model: 'TT', car_year: 2008 }];

//For negative test if inventory is not array
const inventoryString = 'invalid';
// Describe block to test problem6
describe('Problem6 function', () => {
    // Test case for the successfull response for Audi and BMW cars Array
    it('should return stringified array of audiandbmw array', () => {
        // expecting the  Stingified array of Audi and Bmw cars 
        expect(problem6(inventory)).toEqual(JSON.stringify(AudiandBMW));
    });
    it('should return error if inventory is not array type', () => {
        // expecting error as inventory passed is of type string instead of array
        expect(problem6(inventoryString)).toEqual('arr must be typeof Array');
    });
});
