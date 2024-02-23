// Dates

let myDate=new Date() // object
// console.log(myDate)
// console.log("toString : "+ myDate.toString())
// console.log("toDateString : "+ myDate.toDateString())
// console.log("ISO : "+ myDate.toISOString())
// console.log("JSON : "+ myDate.toJSON())
// console.log("LocaleString : "+ myDate.toLocaleString())
// console.log("toTimeString : "+myDate.toTimeString())

let myCreatedDate = new Date(2024, 0, 23);
// let myCreatedDate=new Date(2024,0,23,5,3)
// let myCreatedDate=new Date("2023-01-14")
// let myCreatedDate=new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp); // 1 jan 1970 -> current time (in mile sec)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate());
// console.log(newDate.getMonth());//start from 0 - 11 
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// ` Today is ${newDate.getDay()}`

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));