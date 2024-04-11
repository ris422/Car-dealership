function problem1(arr, value) {
    // Check if arr is an array
    if (!Array.isArray(arr)) {
      return ('Inventory should be of type array');
    }
    // Check if value is greater than 0
    if (value <= 0) {
      return ('Id should be greater than 0');
    }
    // Find the car object with the given id
    return arr.find(car => car.id === value);
}

module.exports = problem1;
  