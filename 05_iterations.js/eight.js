// reduce 

const myNumbers=[1,2,3]

// const myTotal=myNumbers.reduce(function(accmulator,currentValue){
//     console.log(`acc : ${accmulator} and currval : ${currentValue}`)
//     return accmulator+currentValue
// },0) //  <------ NOTE
// console.log(myTotal);

// .reduce((acc,currval,initialValue))

// const myTotal2=myNumbers.reduce((acc,currval)=>acc+currval,0) 
// console.log(myTotal2);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
]

const myTotal=shoppingCart.reduce((acc,curr)=>acc+curr.price,0)
console.log(myTotal);