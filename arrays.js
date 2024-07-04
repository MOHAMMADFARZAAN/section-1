const arr = [23, 'nice', true, console.log, undefined]
console.log(arr)
console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(arr.length);


const nums = [22,23,54,564,323,65,423,67,8];


// Array traversal


// method 1
console.log('-----------------------------------');

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);    
}

// method 2
console.log('--------------------------');
for(let j of nums){
    console.log(j);
}

// method 3
// IMPORTANT------------------

console.log('---------------using for each function----------------');

nums.forEach( ( a,m,b ) => {console.log(a,m,b);})

nums.forEach((a) => {console.log(a**2)})

// also correct
nums.forEach( a => console.log(a**2));

// Create a new array containing only even numbers from the existing array
let arrr=[];
nums.forEach((a) => {if (a%2===0) {
    arrr.push(a);
}

});
console.log(arrr);
