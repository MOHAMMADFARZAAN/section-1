function addNum(a,b) {
    var c=a+b;
    console.log(c);
}
addNum(23,433);
// console.log(c);



// ---------------------------------------------------




const getAvg = function(m1,m2,m3,m4=7) {
     const avg =(m1+m2+m3+m4)/4;
    //  console.log(avg);
    return avg;
}
const res=getAvg(23,23,4);
console.log(res);
// console.log(undefined + 30493);


// ---------------------------------------------------


const factorial =(n) => {

    let f=1;
    for (let i=2; i < n; i++) {
        f*=i;
        
    }
    return f;
}
const ans=factorial(12);
console.log(ans);





// --------------------------------------------------


let [a,b,c] = [12,34,43];
[b,c] = [c,b]

// --------------------------------------------------

const [name1, name2, , ,name5]=['ramu', 'shamu', 'raju', 'pinki', 'kalu']
console.log(name5);

// --------------------------------------------------

const getReport = (m1,m2,m3,m4, max=100) => {
    const avg = getAvg(m1,m2,m3,m4);
    const percentage = avg/max*100;
    return[avg, percentage]
}

const[v1,v2]= getReport(32,33,43,54,100);
console.log(v1,v2);


// -------------------------------------------------------------------------------------------


// WAP to take start and end as parameters and print all 
// numbers divisible by 7 in that range

let fullsum =0;

console.log('--------------Numbers Divisible By 7---------------');

const divisibility = (f,g) => {
    for (let i = f; i <=g; i++) {
        if (i%7===0) {
            console.log(i);
            fullsum = fullsum + i;
        }
        
    }
    console.log('--------------SUM-----------------');
    console.log(fullsum);
    return fullsum;
}

divisibility(1,10000000);


// -----------------------------------------------------------------------------------------


