// Immediately Invoked Function Expressions (IIFE) -> it is invoked immediately after initalization
// ex: used where we want to immediately connect to database , when an application is started
// USES:
// 1. *** It helps to prevent some Functions to get polluted global scope 
// 2. To execute the function immediately

//___________________________________
// Normal function
function connect(){
    const dbvalue=123
    console.log("DB CONNECTED")
}
// connect() // executed immediately but this function can get polluted by global scope 
//___________________________________


// --------------- IIFE -----------------
// ({})();
// ({function defination})()-->execution call , similar to connect()
// ---- Named IIFF ----
(function connect(){ 
    console.log("DB CONNECTED")
})(); 

// ; -> v.v.v.imp to stop the function execution

// using Arrow function ()=>{} or let variable=()=>{}

// (()=>{})(); // Syntax
// ((fun parameter)=>{fun body/defination})(arguments passed);

(()=>{ // simple or unnamed iffe
    console.log("DB CONNECTED TWO")
})();

// How to pass variable in the IIFE
// --- Simple IIFE ---
((name)=>{
    console.log(`DB CONNECTED ${name}`);
})("John");