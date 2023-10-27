
let a=10;
let b=2;
//operator in js
console.log("a+b",a+b);
console.log("a-b",a-b);
console.log("a*b",a*b);
//here we dont need to take my variable for floating variable
console.log("a/b",a/b);
console.log("a**b->means a^b",a**b);
console.log("a%b",a%b);
console.log(a++);
console.log(--a);

let c=5;
let d="5";
//comparision operator
console.log(c==d);
console.log(c!=d);
console.log(c===d);
console.log(c!==d);

//prompt take inpur from user as string 
let s=prompt("what is age ?");
if(s>0)
{
    alert("this is a valid age");
}
console.log(typeof s);
s=Number.parseInt(s);

console.log(typeof s);      //type custing
console.log("you can" ,(s<18? "not drive":"drive" ));

switch(s)
{
    case 10:
        console.log("your age is 10")
        break;
    case 12:console.log("your age is 12")
    break;
    default:
        console.log("you are not special")
}
//for in loop
let r=
{
    " nazmul":21,
    "haque":22,
    "bhuiyan":23
}
for(let i=0;i<Object.keys(r).length;i++)
{
    console.log(Object.keys(r)[i]+" "+r[Object.keys(r)[i]]);
}
for(let q in r)
{
    console.log("name"+q+" age "+r[q])
}
//for of loop
for(let f of "nazmuk")
{
    console.log(f)
}
//function 
function avg(o,p)
{
    return o+p;
}
let v=10;
let n=33;
console.log(avg(v,n))

const sum=(v,n)=>
{
    return v+n;
}
const hello=()=>
{
    console.log("hello here")
}
console.log(sum(v,n))
hello();