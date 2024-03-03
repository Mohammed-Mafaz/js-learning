// __________________________________________________________________
// NOTES :
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise acts as a placeholder for a value that may not be determined when the Promise is initially made. It enables you to attach functions to handle the eventual outcome, whether it's success or failure, of an asynchronous operation. This allows asynchronous functions to resemble synchronous ones by not immediately returning the final result, but rather providing a Promise to deliver the result at a later time.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// _____________________________________________________________________

// const promiseOne = new Promise(function(resolve,reject){
//     // Do an async task
//     // for example : DB calls , cryptography, network call
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve(); // to connect with .then()
//     },1000)
// },1000)

// // consuming 
// promiseOne.then(function(){
//     console.log("Promise Consumed");
// });

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000)
// },1000).then(function(){
//     console.log("Async 2 resolved")
// })

// const promiseThree  = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"John",email:"john@email.com"})
//     },1000)
// }).then(function(user){
//     console.log(user); // gives object
// })

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false; // try for true
        if(!error){ // if there is no error then resolve 
            resolve({username:"sam",password:"123"})
        }else{
            reject('ERROR: Something went wrong');
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>console.log(username))
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("This is invoked by finally : The promise is either resolved or rejected"))

// following code (way) is NOT allowed
// const username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// });


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true; 
//         if(!error){ 
//             resolve({username:"javascript",password:"123"})
//         }else{
//             reject('ERROR: JS went wrong');
//         }
//     },1000)
// });


// async await doesn't tell us whether the opertion was successful or Not (they cannot not handle the error by itself) therefore we have to use try-catch 
async function consumePromiseFive(){
    try{
    const response = await promiseFive
    console.log(response);
    } catch (error){
        console.log(error);
    }
}
// consumePromiseFive();

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json(); // used await bcuz converting string to json takes time
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}
// getAllUsers();

// performing same using fetch and .then,.catch

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>console.log(data)) // takes input from above '.then'
// .catch((error)=>console.log(error))


// MORE INFO about fetch() : how it exactly works (also referred Notes)
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))

// here when (above promiseFour is uncommented) fetch is used to get api.github.com ... this progam executes such that even though the fetch(code) is written latter in the code, it is executed First ... bcuz for fetch() --> we have a exclusive Micro task queue (priority queue) ,,, whereas the promise code which have setTimeout is placed into task queue.

// fetch() --> micro task queue (priority queue)
// other like setTimeout, setInterval  --> task queue