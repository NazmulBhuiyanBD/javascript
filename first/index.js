console.log("hello ")

//if we use let here than it will give us error

/*var a="hello"
var a=10
console.log(a)
*/
let a="hello"
//let a=10
const k="asdsd"
//we can't change it
console.log(a)
/*
premitive data type
nn bb ss u
null ,number->boolean,bigint->string,symbol->undefined

*/
let c=BigInt(100);
let d=c+BigInt(10);
let e=true

console.log(d)
console.log(typeof d)
console.log(typeof e)
//non primitive data type:object in js
const item={
    "nazmul":true,
    "haque":false,
    "bhuiyan":65,
    "sayem":"kachi"

}
console.log(item["nazmul"])
item["frined"]="me"
item["sayem"]="biriyani"

console.log(item)
//we can change any object bt we cant change item

const dict={
    appreciate:"recognize the full worth of",
    yakka:"work,specially hard work",
    ataraxia:"a state od freedom from emotional disturbance and anxiety"

}

console.log(dict.yakka)
// or we use console.log(dict['yakka'])