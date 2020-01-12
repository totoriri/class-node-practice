// a)
let numbers = [1, 2, 3, 4];

function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let i of args) sum+= i;
    
    return sum;
  }

// b
const http = require('/mySum');

// c）
const myArr = [3, 4, 5, 6];


// d)
let result = sumAll(...numbers); 
console.log('d)' + result);

// e)
const mySecondArr = myArr.map(i => i * 2);
console.log(mySecondArr);

// f）
// Filter the contents of your mySecondArr using an anonymous function that console
// logs the numbers above average number (you’ll need to find the average first).
let average = mySecondArr.reduce((pvalue, cvalue, index)=> {
    return pvalue + cvalue;
},0)/mySecondArr.length;
console.log(average);
const averageAboveNum = mySecondArr.filter(k => k > average);
console.log(averageAboveNum);


// g)
setTimeout(() => console.log("g)Goodbye"), 3000);


// h)
const employee = {
    name:"risa",
    email: "kakak@gmail.com",
    department: "1",
    startDate: "2020/01/01"
}

const { name, email } = employee;

const person = {
    name,email
}


console.log(person);
