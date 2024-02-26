// forEach , filter , map
// map returns everything
// filter returns based on true/false condition

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.filter((num)=>num+10) // no changes made in the array
// const newNums=myNumbers.map((num)=>num+10) // changes are made num+10
// console.log(newNums);

// const newNums=myNumbers.map((num)=>num*10).map((num=>num-10))
// console.log(newNums);

const newNums=myNumbers.map((num)=>num*10).map((num=>num-10)).filter((num)=>num>40)
console.log(newNums);