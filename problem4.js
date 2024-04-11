function problem4(arr){
    // Check if arr is an array
    if (!Array.isArray(arr)) {
        return ('arr must be typeof Array');
    }
    const years = [];
    // iterating through arr 
    for(let i=0; i<arr.length; i++){
        const car = arr[i];
        // storing the car manufacture year in years array
        years[i] = car.car_year;
    }
    return years;
}

module.exports = problem4;