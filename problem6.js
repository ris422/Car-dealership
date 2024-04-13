function problem6(arr){
    // Check if arr is an array
    if (!Array.isArray(arr)) {
        return ('arr must be typeof Array');
    }
    const AudiBMW = [];
    let j =0;
    // Iterating through arr 
    for(let i=0; i<arr.length; i++){
        const car = arr[i];
        // checking if current car is either audi or bmw
        if(["Audi", "BMW"].includes(car.car_make)){
            // Storing the cars in AudiBMW Array
            AudiBMW[j++] = car;
        }
    }
    return JSON.stringify(AudiBMW);
}
module.exports = problem6;