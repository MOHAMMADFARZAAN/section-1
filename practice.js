// // Question 1:


// let x = 83;
// if (x > 70 && x < 120) {
//     console.log(true);
// }
// else{
//     console.log(false);
// }



// // Question 2:


// let age = 19;
// if (age>=18) {
//     console.log('Eligible For Driving License');
// }
// else{
//     console.log('Not Eligible');
// }




// // Question 3:


// let a=32;
// let b=232;
// let c=2322;

//  if (a>b&&a>c) {
//     console.log(a);
//  }
//  if (b>a&&b>c) {
//     console.log(b);
//  }
//  if (c>a&&c>b) {
//     console.log(c);
//  }



// // Question 4:


//  let y=36;
//  let count = 0;
//  for (let i = 1; i < y ;i++) {
//     if (i*i===y) {
//         count++;
//     }
// }
// if (count>0) {
//     console.log('Perfect Square');
// }
// else{
//     console.log('Not a Perfect Square');
// }



// // Question 5:

// let n=9823;

// if (n%7===0) {
//     console.log('Number Divisible By 7');
// } else {
//     console.log('Number Not Divisible By 7');
// }
// if (n%11===0) {
//     console.log('Number Divisible By 11');
// } else {
//     console.log('Number Not Divisible By 11');
// }



// Question 6:

// let x = 9;
// let count = 0;
// for (let i = 1; i <=x; i++) {

//     if (x%i===0) {
//         count++;
//     }
// }
// if (count===2) {
//     console.log('number is prime');
// }
// else{
//     console.log('number is not prime');
// }


// // Question 7

// let dig = 232;
// const isPalintrome = (dig) => {

// x=dig;
// let last = 0;
// let a = 0;

// while (x != 0) {
//     last = x%10;
//     a = a*10 + last;
//     x = Math.floor(x/10);

// }
//  if (dig===a) {
//     return true;
//  } else {
//     return false;
//  }
// }
// console.log(isPalintrome(112211));



// // Question 8


// const isReverse = (dig) => {

// x=dig;
// let last = 0;
// let a = 0;

// while (x != 0) {
//     last = x%10;
//     a = a*10 + last;
//     x = Math.floor(x/10);

// }
//     return a;
// }
// console.log(isReverse(139));



// // Question 9


// const isPrime = ( (n) => {
//     let count = 0;
//     for (let i = 0; i <=n; i++) {
//         if (n%i===0) {
//             count++;
//         }
//     }
//     if (count===2) {
//         return true;
//     }
// } )

// const primeNum = (s,e) => {
//     let count = 0;
//     let arr = [];
//     for (let i = s; i <= e; i++) {
//          if (isPrime(i)) {
//             arr.push(i);
//          }
//         }
//         console.log(arr);
        
//     }
// primeNum(1,20);



// Question 10




const fibo = ( (n) => {
    for(i=0;i<=n; i++)
        {
            let a = i-1;
            let b = i-2;
            console.log(a+b)
        }
})

fibo(12);