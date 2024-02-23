const score=400
// console.log(score);
// console.log(typeof score);// number


const balance=new Number(100) 
// console.log(balance) // [Number :100]
// console.log(typeof balance) // [type : object]

// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) //xyz.00

const otherNumber=23.895
const anotherNumber=123.895
const thirdNumber=1123.895

// console.log(otherNumber.toPrecision(3)) //23.9
// console.log(anotherNumber.toPrecision(3)) //124
// console.log(thirdNumber.toPrecision(3)) //1.12e+3

const hundreds=100000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))

// ******************** Maths *********************

//  console.log(Math);
//  console.log(Math.abs(-4));
//  console.log(Math.round(4.6));
//  console.log(Math.ceil(4.2));
//  console.log(Math.floor(4.9));
//  console.log(Math.sqr(25));
//  console.log(Math.min(1,2,3,4,5))
//  console.log(Math.max(1,2,3,4,5))

 console.log(Math.random()); // 0.000... to 1 (0-1)
 console.log(Math.random()*10); // can occur '0' ; 0*10=0 (0-10)
 console.log((Math.random()*10)+1);  // zero will not occur (1-10)
 console.log(Math.floor(Math.random()*10)+1);  
 
 // if we require value between 10-20
 const min=10
 const max=20 

 console.log(Math.floor(Math.random()*(max-min+1))+min)