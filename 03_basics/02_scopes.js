//var c =300
let a = 300
if(true){
    a=10
    const b=20
    c=30
    // console.log("Inner a : ",a)
}
// console.log(a);
// console.log(b);
// console.log(c);
let i=100
for(let i=0;i<array.length;i++){
    const element=array[i];
}
// console.log(i);

function one(){
    const username="John"
    function two(){
        const website="Youtube"
        // console.log(username); can access
    }
    // console.log(website); cannot access
    two();
}
// one()

if(true){
    const username="john"
    if(username==="john"){
        const website="youtube"
        // console.log(username+website);
    }
    // console.log(website); //cannot access
}
// console.log(username);// cannot access

// +++++++++++ interseting +++++++++++++++++

console.log(addOne(5)); // Executed
function addOne(num){
    return num+1;
}
// console.log(addTwo(5)); // NOT Executed
const addTwo=function(num){
    return num+2;
}
addTwo(5); // Executed
