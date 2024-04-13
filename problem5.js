 function problem5(arr, year = 2000){
     // Check if arr is an array
     if (!Array.isArray(arr)) {
        return ('arr must be typeof Array');
    }
    let oldercarscount = 0;
    // Iterating through arr 
    for(let i=0; i<arr.length; i++){
        if(arr[i] < year){
            // counting the numbers of car that are older than year 2000
            oldercarscount++; 
        }
    }
    return oldercarscount
}

module.exports = problem5