// singleton -> is created when an Object is created using Constructor
// Object.create 

// Object literals
const mySymbol=Symbol("key1");
const JsUser={
    name:"John",
    "full name":"John Doe",
    age:23,
    location:"Bengaluru",
    email:"john@email.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],// object inside an Object
    [mySymbol]:"myKey"
}
// Accessing Object elements
// Method 1 - dot notation
// console.log(JsUser.name);
// console.log(JsUser.email);
// // console.log(JsUser.full name); // Drawback of dot method
// console.log(JsUser.mySymbol)// this method treats the symbol as Undefined 
// Method 2 - Square notation
// console.log(JsUser["email"])
// console.log(JsUser[mySymbol])
// console.log(typeof JsUser[mySymbol])


// JsUser.email="johndoe@email.com";
// // Object.freeze(JsUser); // freezes the Object JsUser
// JsUser.email="janedoe@email.com";
// console.log(JsUser.email)

JsUser.greeting=function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting);//returns [{Function {anonymous}}] ; return the reference of the function
console.log(JsUser.greeting());// runs the function

JsUser.greetingTwo=function(){
    console.log(`Hello JS user ${this["full name"]}`) // String Interpolation 
}
console.log(JsUser.greetingTwo());

