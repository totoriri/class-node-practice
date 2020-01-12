// b)
let numbers = [1, 2, 3, 4];

function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let i of args) sum+= i;
    
    return sum;
  }


module.exports = mySum;