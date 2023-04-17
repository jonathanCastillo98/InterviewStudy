/* Spread operator */
// Allows us to quickly copy all or part of an existing array or object into another array or object
const data = [1, 2, 3, 4, 5];
const copyData = [...data, 6, 7, 8]; // 1,2,3,4,5,6,7,8




/* Destructuring */
// Useful to extract data from objets and arrays.
const obj = {
    name: "Jonathan",
    lastName: "Castillo",
    age: 24
}

const { name, lastName, age } = obj;




/* Hoisting */
// For variables using var, the declarations are hoisted to the top and are initialized to undefined, const and let are also hoisted but not initializen, it throws an error:

// ----> var name = undefined;
// ----> const name; ---> Temporal Dead Zone
// ----> let name; ---> Temporal Dead Zone

console.log(Name); //undefined
console.log(LastName); //Reference Error
console.log(Age); //Reference Error

var Name = "Jonathan";
const LastName = "Castillo";
let Age = 24;

// For Functions just functions declarations are hoisted, functions expressions are not.

doStuff(1, 2); // 3
function doStuff(a, b) {
    return a + b;
}

doStuff2(1, 2); // Throw an error

const doStuff2 = function (a, b) {
    return a + b;
}




/* Scope */
// Global Scope: Variables that are available to be accessed from anywhere in the program.
const globalVariable = 5;

// Local Scope: Variables that are only available within a specific block of code or function.
if (5 > 3) {
    const localScope = 3;
}




/* DataTypes */
// Primitives
const stringType = "Jonathan";
const numberType = 24;
const booleanType = true;
const nullType = null;
const undefinedType = undefined;
const bigintType = BigInt("1234567890123456789012345678901234567890");
const symbolType = "symbol";

// Non primitives
const arrayType = [1, 2, 3, 4, 5];
const objectType = { name: "Jonathan", lastName: "Castillo" };
const dateType = Date.now();
const functionType = function (a, b) { return a + b };




/* Closures */
// Functions that are defined inside another function, and have access to variables and parameters from the parent function.

const addTwoConstructor = () => {
    const number = 2;
    return function (addNumber) {
        return addNumber + number;
    }
}

const addTwo = addTwoConstructor();

console.log(addTwo(1)) // 3
console.log(addTwo(10)) // 12
console.log(addTwo(15)) // 17




/* Array methods */
const arr = [1, 2, 3, 4, 5];
// Push
arr.push(6) // [1, 2, 3, 4, 5, 6]
// Pop
arr.pop() // [1, 2, 3, 4, 5]
// unshift
arr.unshift(0) // [0, 1, 2, 3, 4, 5]
// shift
arr.shift() // [1, 2, 3, 4, 5]
// sort
arr.sort() // [1, 2, 3, 4, 5]
// slice
const sliceValue = arr.slice(2, 4) // [3, 4]
// splice
const spliceValue = arr.splice(2, 0, 99); // [1, 2, 99, 3, 4, 5]




/* String methods */
const str = "Jonathan";
const arrMethod = [1, "Jonathan", null];
str.includes("Jon") // True
arrMethod.includes(null) //  True



/* High order functions */
const nameArr = ["Jonathan", "Zaybet", "Apolo", "Persi", "Casper", "Archie", "Kali", "Negrito"];
const numberArr = [1, 2, 3, 4, 5];

// Map
const mapArr = nameArr.map((item, index) => {
    if (index === 2) {
        return item.length;
    }

    return item
}) // ["Jonathan", "Zaybet", 5, "Persi", "Casper", "Archie", "Kali", "Negrito"];

// Filter
const filterArr = nameArr.filter((item, _index) => {
    return item.length > 5
}) // ['Jonathan', 'Zaybet', 'Casper', 'Archie', 'Negrito']

// Reduce
const reduceArr = numberArr.reduce((acumulator, current) => {
    return acumulator + current
}) // 15

const foreachArr = numberArr.forEach((item, _index) => {
    return console.log(item * 2);
}) // 2 4 6 8 10

const findArr = nameArr.find((item, index) => {
    return item > 4
})



/* Callback */
// Functions that is passed to another function as a parameter, and be executed when the main function is done.
function saludar(nombre) {
    console.log('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
    var nombre = "Jonathan"
    callback(nombre);
}

procesarEntradaUsuario(saludar); // Hola Jonathan



/*  Asynchrony */
// I think of it as non-blocking code, which means that it does not wait for something to return something, it steps over the next sentence driven by the event loop
// Callbacks
// Promises
// Async await



/* Promises */
// It is an object representing the eventual completion or failure of an asynchronous operation.

// Pending
// Fullfiled
// Rejected

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});

myPromise
    .then(handleResolvedA, handleRejectedA)
    .then(handleResolvedB, handleRejectedB)
    .then(handleResolvedC, handleRejectedC);




/* Async await */
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
}




/* Event Loop */
// It is the one that is in charge of implementing the asynchronous operations or the non-blocking




/* This */
const Sasha = {
    nombre: "Sasha",
    saludar: function () {
        return `Hola ${this.nombre}`
    }
}

const Pepe = {
    nombre: "Pepe"
}


// Bindings:

// 1. Lexical binding(arrow functions)
// 2. New binding (instanciar objetos)
// 3. Explicit binding
//     1. Bind —- No se ejecuta automaticamente (util cuando se usan eventos del browser)
//         1. sacha.saludar.bind(pepe)
console.log(Sasha.saludar.bind(Pepe)()) //Hola Pepe
//     2. Call,Apply —- Se ejecutan automaticamente
//         1. sacha.saludar.call(pepe, …arguments)
console.log(Sasha.saludar.call(Pepe)) //Hola Pepe
//         2. sacha.saludar.apply(pepe, […arguments])
console.log(Sasha.saludar.apply(Pepe)) //Hola Pepe

// Traditional Functions

// The this keyword is set to the object that invoked the function. Otherwise, the this keyword defaults to the global object

// Arrow functions

// The this keyword does not default to the global object. The value of this is determined by the context of where the function is called
// SE EJECUTAN EN EL MISMO CONTEXTO EN EL QUE FUERON CREADAS!