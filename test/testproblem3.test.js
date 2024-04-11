// Importing the problem3 function
const problem3 = require('../Problem3');
// Importing the inventory array
const inventory = require('../script');
// Sorted array of modelname
const modelNames = [ '300M',           '4000CS Quattro',       '525',
'6 Series',       'Accord',               'Aerio',
'Bravada',        'Camry',                'Cavalier',
'Ciera',          'Defender Ice Edition', 'E-Class',
'Econoline E250', 'Escalade',             'Escort',
'Esprit',         'Evora',                'Express 1500',
'Familia',        'Fortwo',               'G35',
'Galant',         'GTO',                  'Intrepid',
'Jetta',          'LSS',                  'Magnum',
'Miata MX-5',     'Montero Sport',        'MR2',
'Mustang',        'Navigator',            'Prizm',
'Q',              'Q7',                   'R-Class',
'Ram Van 1500',   'Ram Van 3500',         'riolet',
'Sebring',        'Skylark',              'Talon',
'Topaz',          'Town Car',             'TT',
'Windstar',       'Wrangler',             'Wrangler',
'XC70',           'Yukon']
//For negative test if inventory is not array
const inventoryString = 'invalid';


// Describe block to test problem2
describe('Problem2 function', () => {
  // Test case for the function
  it('should return sorted array of carmodel', () => {
    // Assertion to check if the function returns the correct result
    expect(problem3(inventory)).toEqual(modelNames);
  });
  it('should return error if inventory is not array type', () => {
    // expecting error as inventory passed is of type string instead of array
    expect(problem3(inventoryString)).toEqual('arr must be typeof Array');
  });
});
