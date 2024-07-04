const nums = [22,23,54,564,323,65,423,67,8];


// -----map function 


const squares = nums.map(( a ) => { return a**2 });
console.log(squares);



// Remove Decimal from the Array

const prices = [23.43,54.23,45.67,23.98,23.33,54.11];

const integ = prices.map((a) => {return parseInt(a)});
console.log(integ);


const m = 232;

// -----------filter---------------------

const evennums = nums.filter((a) => {return a%2===0});
console.log(evennums);

// filter pricess greater than 50 and less than 300

const pri = nums.filter((a) => {return a > 50 && a < 300});
console.log(pri)