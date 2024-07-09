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
        brand: 'Apple',
        model: 'iphone 15 Pro',
        price: 'mummy ki ek sone ki chain',
        colors: ['white', 'purple', 'titanium'],
        ram: ['6GB', '8GB']

    },
    {
        brand: 'Apple',
        model: 'iphone 15',
        price: 'mummy ki ek sone ki chain',
        colors: ['yellow', 'blue', 'titanium'],
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
        brand: 'Samsung',
        model: 'S24',
        price: '$1100000',
        colors: ['white', 'midnight black', 'halo'],
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


// --------------5th July-------------------------------------

console.log('//////////////////////////////////////////////////////////////////////')


// Question: filter all apple smart phones 

const keyword = 'apple';

const Appleonly = (smartphoneArray.filter( (a) => {return a.brand.toLowerCase() === keyword.toLowerCase()}));
const Appleonly2 = (smartphoneArray.filter( (a) => {return a.brand.toLowerCase().includes(keyword.toLowerCase())}));
console.log(Appleonly2);


// print all brands

const brandss = smartphoneArray.map((phone) => {return phone.brand});
console.log(new Set(brandss));        

// to remove all the duplicate items  it is now a set map and filter will not work


// to convert set back to array

console.log( Array.from(new Set(brandss)));
console.log( Array.from('APPLEJSLDFHSL'));


// To display in orderly array

let [brand, model, price] = ['Apple', 'Iphone 15', 23223]
console.log(brand + ' ' + model + ' - ' + price);
console.log(`${brand} ${model} - ${price}`);


console.log(smartphoneArray.map((p,q) => {return `${q+1}. ${p.brand} ${p.model} - ${price} `}));




// ------------------------------------------


console.log('////////////////////////////////////////////////////////////')

 const allcolors = smartphoneArray.map((p,q) => {return p.colors.map((c) => {return `${p.brand} ${p.model}   -   ${c}`})})
    
console.log(allcolors.flat());



// ------------add ram -----------

// const allcolorsram = smartphoneArray.map((p,q) => {return p.colors.map((c) => {return c.map)})
// console.log(allcolorsram.flat());






