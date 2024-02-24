// To initialize an Object
// Method 1 
// const AppUser = new Object()
// Method 2
const AppUser = {}

// console.log(AppUser); // {}

AppUser.id="ab001"
AppUser.name="Sam"
AppUser.isLoggedIn=false

// console.log(AppUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"John",
            lastname:"Doe"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

// ways to Concat Objects

const obj1={1:"a",3:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}
// not to do
// const obj3={obj1,obj2}
// W-1
// const obj3=Object.assign(obj1,obj2);// if key value is same then last key's value is retained (Same in optional way too)
// optional (documantation-wise)
// const obj3=Object.assign({},obj1,obj2);  // in both result is stored in new object
// console.log(obj3);

// Way-2  Spread Operator
const obj3={...obj1,...obj2,...obj4} // if "..." included before,it will take the object as whole (without breaking the elements) 
// console.log(obj3);

const users =[
    {
        id:1,
        email:"a@email.com"
    },
    {
        id:2,
        email:"b@email.com"
    },
    {
        id:3,
        email:"c@email.com"
    } 
] // objects in Array

users[1].email; // a@email.com
// console.log(AppUser);

// console.log(Object.keys(AppUser)); // takes all keys in the objects and stores it into an array
// console.log(Object.values(AppUser)); // """" stores all values in an array
// console.log(Object.entries(AppUser));//[['id','ab001'],['name','Sam'],['isLoggedIn','false]]

// console.log(AppUser.hasOwnProperty('isLoggedIn')) ;//true

// Object Destructure

const course={
    courseName:"JS",
    coursePrice:"999",
    courseInstructor:"Hitesh"
}

// console.courseInstructor

// const {courseInstructor}=course
// console.log(courseInstructor)
//OR use
const {courseInstructor:instructor}=course
console.log(instructor)
// JSON Format
// {
//     "name":"hitesh",
//     "coursename":"js",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]