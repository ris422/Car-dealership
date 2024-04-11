function problem2(arr) {
  // Check if arr is an array
  if (!Array.isArray(arr)) {
    return ('arr must be typeof Array');
  }
  // Check if arr has length greater than 0
  if (arr.length === 0) {
    return ('arr must have length greater than 0');
  }
  // Get the last car from the array
  const lastCar = arr[arr.length - 1];
  return lastCar;
}

module.exports = problem2;
