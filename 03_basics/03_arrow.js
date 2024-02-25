const user={
    username:"john",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to our website`);
        // console.log(this); // prints current object
    }
}
// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();
// console.log(this); // empty {} in this console and window in browser console

// function chai(){
//     console.log(this);// will have something
// }
// chai();
// function chai2(){
//     const username="john"
//     console.log(this.username);// undefined ; cannot access 
// }
// chai2()

// const chai=function(){  // Doesn't work for this initialization too
//     let username="john"
//     console.log(this.username) // cannot access
// }
// Arrow function  : here too, it we cannot access this.username
const chai=() =>{  
    let username="john"
    // console.log(this.username); // cannot access
}
chai();

// ()=>{} // arrow function

//Way 1
// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }

// Way 2

// const addTwo=(num1,num2)=> num1+num2 // no return statement required
// Way 2.1 - Preferred
// const addTwo=(num1,num2)=> 
// (num1+num2) 

const addTwo=(num1,num2)=>({username:"john_doe"})
console.log(addTwo(3,3))
