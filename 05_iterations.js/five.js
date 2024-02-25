// for each loop

// first use case scenario

const coding =["js","ruby","java","python","cpp"]

// used normal function syntax
// coding.forEach(function(item){  //here function will not have any name
//     console.log(item)
// })

// used Arrow function syntax
// coding.forEach((item)=>{console.log(item)})

// forEach loop can provide (item,index,array)
// coding.forEach((item,index,arr)=>{console.log(item , index , arr)})


// second use case scenario

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe); // NOTE: here we are providing ONLY function's REFRENCE and NOT Executing the function --> ()

const myCoding =[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
// myCoding.forEach( (item)=>{
//     console.log(item)
// } )
// myCoding.forEach( (item)=>{
//     console.log(item.languageName)
// } )