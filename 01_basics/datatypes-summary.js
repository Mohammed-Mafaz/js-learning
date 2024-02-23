// types of datatypes
// Primitive

// 7 Types : String,Number,boolean,null,undefined,Symbol,bigInt

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// let score=100
// let scrore1=99.5

// const isLoggedIn=false
// const outsidetemp=null

const id=Symbol("123")
const anotherId=Symbol("123")
console.log([id,anotherId]);
console.log(id==anotherId); // false

// const bigNumber=1234567890233456n;

// Reference (Non-Primitive)

// Array,Objects,Functions

const grocery =["bread","Milk","Eggs"]

let myObj={
    name:"john",
    age:22,
}

const myFunction=function () {
    console.log("Hello World");
}

console.log(typeof grocery) // object
console.log(typeof myFunction) // object function
console.log(typeof myObj);//object