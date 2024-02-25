const coding =["js","ruby","java","python","cpp"]

// Shortcoming of forEach loop 
const values = coding.forEach((item)=>{
    // console.log(item)
    return item;
})
// console.log(values); // undefined

// forEach loop Doesn't returns anything and hence cannot be stored in a Variable

// for example, if we need "java" from the coding[] and return this value n store it ; this cannot be performed using forEach loop

// To Overcome this , use filter

const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter( (num)=> num>4)
// console.log(newNums);

const newNums1=myNums.filter( (num)=>{num>4} )
// console.log(newNums1); // [] -> empty

// ---if single operation is to perform , then use Num.filter()=>condition OR operation
// ---for more operations 
//(x)=>{ return x } --> when {} is opened return statement is must to return the items[x]  ; similar concept  is used in Arrow function
const newNums2=myNums.filter( (num)=>{
    return num>4
} )
// console.log(newNums2);  

// to do the same using forEach loop
const Nums=[]
myNums.forEach((num)=>{
    if(num > 4){
        Nums.push(num);
    }
})
// console.log(Nums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // Query 1 : fetch the books whose genre is history
  const userBook=books.filter((bk)=>bk.genre==="History")
//   console.log(userBook);
  // Query 2 : fetch the books which are published in and after the year 1995
  const userBook1=books.filter((bk)=>{return bk.publish>=1995})
//   console.log(userBook1);
  // Query 3 : fetch the books which are published in and after 1995 AND its genre is History
 const userBook2=books.filter((bk)=>{
    return bk.publish >= 1995 && bk.genre==="History"
})
  console.log(userBook2);