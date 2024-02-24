
function sayMyName(){
    console.log("J")
    console.log("O")
    console.log("H")
    console.log("N")
}
// sayMyName();

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumbers(2,2);
// addTwoNumbers(2,"a");
// addTwoNumbers(2,null);

// const result=addTwoNumbers(3,5);
// console.log("Result",result);//undefined

function addTwoNumbers(num1,num2){
    return num1+num2;
}
// console.log("Result",result);

function loginUserMessage(username){
    return `${username} just logged in`
}

// loginUserMessage("john")
// console.log(loginUserMessage("john"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())//undefined just logged in
// console.log(loginUserMessage(null))//null just logged in

function loginUserMessage2(username){
    if(!username){ // if username != valid  -> go in (invalid username: "",undefined)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage2())

function loginUserMessage3(username="Sam"){ // Sam will get override if value is provided 
    if(!username){ 
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

function calculateCartPrice(...num){
    return num  
}
// console.log(calculateCartnum(200,400,500));

function calculateCartPrice1(val1,val2,...num){
    return num  
}
// console.log(calculateCartnum(200,400,500,2000)); // stores all values in an array except val1 & val2 (0th & 1st value)


const user={
    username:"john",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
} // note for type checking (type safety)
// handleObject(user)
// handleObject({
//     username:"same",
//     price:399
// })

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,600]))
