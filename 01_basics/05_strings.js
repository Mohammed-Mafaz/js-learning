const name="john_doe"
const repoCount=50


// console.log(name + repoCount + "someValue")

// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const Name=new String("JavaScript");

//console.log(Name[0]);
// console .log(Name.__proto__);

//console.log(Name.length);
//console.log(Name.toUpperCase());
// console.log(Name.charAt(4));
// console.log(Name.indexOf('S'));

const newString=Name.substring(0,4); // ignore -ve indices (if provided) 
// console.log(newString);

const anotherString=Name.slice(-8,4);// accept -ve idxs 
// console.log(anotherString);

const newStringOne="    JS    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url="https://myemail.com/dummy name"
const url="https://myemail.com/dummy%20name"

console.log(url.replace('%20','-'));

console.log(url.includes('dummy'));

console.log(Name.split('-'));

