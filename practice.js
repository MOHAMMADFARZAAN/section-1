// Question 1:


let x = 83;
if (x > 70 && x < 120) {
    console.log(true);
}
else{
    console.log(false);
}



// Question 2:


let age = 19;
if (age>=18) {
    console.log('Eligible For Driving License');
}
else{
    console.log('Not Eligible');
}




// Question 3:


let a=32;
let b=232;
let c=2322;

 if (a>b&&a>c) {
    console.log(a);
 }
 if (b>a&&b>c) {
    console.log(b);
 }
 if (c>a&&c>b) {
    console.log(c);
 }



// Question 4:


 let y=36;
 let count = 0;
 for (let i = 1; i < y ;i++) {
    if (i*i===y) {
        count++;
    }
}
if (count>0) {
    console.log('Perfect Square');
}
else{
    console.log('Not a Perfect Square');
}



// Question 5:

let n=9823;

if (n%7===0) {
    console.log('Number Divisible By 7');
} else {
    console.log('Number Not Divisible By 7');
}
if (n%11===0) {
    console.log('Number Divisible By 11');
} else {
    console.log('Number Not Divisible By 11');
}