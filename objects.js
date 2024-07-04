const user = {
    name: 'Raju',
    email: 'alsdfjs;lfd@gmail.com',
    passward: 'lsdfjsdlkjsld',
    age: 34

};

console.log(user);
console.log(user.name);
console.log(user['email']);



// If the key has some special character then we use this



user.address = 'Lucknow';
user.age = 22;
console.log(user);

user['roll-no'] = 23232;
console.log(user);

// ---------------------------------------------

const key = 'address';

// console.log(user.key);  [WRONG WRONG]


console.log(user[key]);

// ------------------------------------------


// For Keys

console.log(Object.keys(user));

// For Values

console.log(Object.values(user));

// For Both Keys and Values in a 2D Array

console.log(Object.entries(user));

// -------------------Adding a New Array Key for Contact Information-------------------------

user.contact = ['293879283','2039820938']
console.log(user.contact[0]);
console.log(user);

// ------------------------------------------------------------








const smartphone = {
    brand: 'Apple',
    model: 'iphone 15 Pro Max',
    price: 'mummy ki ek sone ki chain',
    colors: ['white', 'green', 'black'],

}

// Syntax to access second color in object smartphone


console.log(smartphone.colors[1][3]);

// Replace green with green color varients

smartphone.colors.splice( 1,1,'Forest Green', 'Sea Green' )
console.log(smartphone);




const smartphoneArray = [

    {
        brand: 'Apple',
        model: 'iphone 15 Pro Max',
        price: 'mummy ki ek sone ki chain',
        colors: ['white', 'green', 'black'],
        ram: ['6GB', '8GB']

    },

    {
        brand: 'MI',
        model: 'pata nahi',
        price: '10 rupay',
        colors: ['purple', 'blue', 'black'],
        ram: ['4GB', '8GB']

    
    },

    {
        brand: 'Samsung',
        model: 'S24 Ultra',
        price: '$1100000',
        colors: ['white', 'gold', 'silver'],
        ram: ['8GB', '16GB']

    
    },

    {
        brand: 'Oneplus',
        model: '12R',
        price: '11 Rupay',
        colors: ['white', 'green', 'black'],
        ram: ['8GB', '12GB']

    
    },

    {
        brand: 'Motorola',
        model: 'RAzr',
        price: 'chandi ki chain',
        colors: ['black', 'white', 'blue'],
        ram: ['6GB', '8GB']

    
    }



]


// Access Price of MI smartphone

console.log(smartphoneArray[1].price);

// Add new Colors in 3rd smartphone (Samsung)

smartphoneArray[2].colors.push('chill green');
console.log(smartphoneArray[2].colors);

// MAP AND FILTER ACTIONS--------------


// CREATE AN ARRAY CONTAINING ALL SMARTPHONE BRANDS------

const brandArray = smartphoneArray.map( (a) => {return a.brand;})
console.log(brandArray);


// filter all smartphones containing white color

console.log('------------------------------------------');

console.log(smartphoneArray.filter( ( a ) => {return a.colors.includes('chill green')}))















