// array

const intArr=[0,1,2,3,4,5]
const strArr=["bread","milk","eggs"]

const arr1=new Array(1,2,3,4)
// console.log(intArr[1])

// Array methods

// intArr.push(6)
// intArr.push(7)
// intArr.pop()

// intArr.unshift(9) // insert 9 at the 0th index and shift all the elements by one to right
// intArr.shift() // remove first element and shift all the elements by one to left

// console.log(intArr.includes(9)) // return boolean value
// console.log(intArr.indexOf(9)) // return the index if exists and -1 if doesn't

// const newArr=intArr.join() //convert array -> string

// console.log(newArr) 
// console.log(typeof newArr)

// slice , splice 

console.log("Before : ", intArr);

const arrNum1=intArr.slice(1,3);
console.log("Slice : ",arrNum1); //1.slice(x,y),where y in exclusive 2. doesn't changes the original array

console.log("After : ",intArr); 


console.log("Before : ", intArr);

const arrNum2=intArr.splice(1,3);
console.log("Splice : ",arrNum2);  // 1.splice(x,y), where y in inclusive 2. make(splice) changes in original array

console.log("After : ",intArr);