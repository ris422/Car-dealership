function problem3(arr){
    // Check if arr is an array
    if (!Array.isArray(arr)) {
      return ('arr must be typeof Array');
    }
    const modelName = []
    // iterating through arr 
    for(let i=0; i<arr.length; i++){
        const car = arr[i];
        // storing the model names of cars in modelNames array
        modelName[i] = car.car_model;
    }
    // sorting the modelNames Array
    modelName.sort((a, b) => a.localeCompare(b));
    return modelName;
}

module.exports = problem3;