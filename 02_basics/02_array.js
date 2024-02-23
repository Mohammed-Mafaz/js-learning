const marvel_heros=["Thor","Ironman","Spiderman"]
const dc_heros=["Superman","Batman","Flash"]

// marvel_heros.push(dc_heros); // inserts the dc_heros array into the marvel_heros array as array in Array ; PUSH is applied on the Orignal array
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]); // [3]-> index of marvel_heros  [1]->index of dc_heros

// const allheros=marvel_heros.concat(dc_heros); // push n concat gives same output BUT Concat return a NEW ARRAY
// console.log(marvel_heros)

const all_new_heros=[...marvel_heros,...dc_heros] // this can concat many array into one
// console.log(all_new_heros)

const meshed_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const flat_array=meshed_array.flat(Infinity);// asks for depth (to solve or flat the array) ; if not mentioned then it solve for depth=1
// console.log(flat_array)



// console.log(Array.isArray("javascript")) // false
// console.log(Array.from("javascript"))// converts into array , which each letter as an element
// console.log(Array.from({name:"javascript"}))//empty array (NOTE)

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)) // converts set of elements into an Array

