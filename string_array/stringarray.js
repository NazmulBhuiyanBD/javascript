let nam="Nazmul";
let nam2="haque";
console.log(nam.length)
let sentence=`my name is ${nam} ${nam2}` //backtic
console.log(sentence)
//escape sequence character
let fruit=`bana\`na`
console.log(fruit);
console.log(nam.toLowerCase());
console.log(nam.toUpperCase());
console.log(nam.slice(2,4));
console.log(nam.slice(2));
console.log(nam.replace("Naz","say"));
console.log(nam.concat("Naz","say"));

friend="    bhuiyan"
console.log(friend);
console.log(friend.trim());//remove space

//array
let arr=[10,12,15,null,"not given"]
console.log(arr)
console.log("length of array ",arr.length)
console.log(typeof arr)

let arr2=[10,12,22]
let a=arr2.toString()
console.log(arr2.pop())
arr2.push(55);
console.log(arr2)
let r=arr2.shift()//remove an ellement from start 

console.log(r)
let r2=arr2.unshift(13)//adding element front side
console.log(r2);

let arr3=[22,32,35,38]
delete arr3[0];
console.log("length of array",arr3.length)
console.log(arr3)

//concat for array
let arr4=[102,309,333,369]
let arr5=[1102,1309,1333,1369]
let newarr=arr3.concat(arr4,arr5)
console.log(newarr)

//sorting array
let arr6=[12,35,11,222,125,55,199]
arr6.sort()
console.log(arr6) //sorting with alphabatically .here this work like a string 

let compare=(a,b)=>
{
    return a-b;
}
//for assending sorting we need another function
arr6.sort(compare);
console.log(arr6)
//for assending sorting we need to return b-a

//splice and slice
let arrr=[10,33,36,39,22,55,58,54]
arrr.splice(2,3,363,366,655,88) //for first digit(2) is index ,second (3) for number of element delete and other element for adding in this scope
console.log(arrr)

let newnum=arrr.slice(2);//start from 2 and other element
console.log(newnum)
let newnum2=arrr.slice(2,5);
console.log(newnum2)//start from 2 and end 5

for(let i=0;i<arrr.length;i++)
{
   console.log(arrr[i])
}
//for finding square 
arrr.forEach((number)=>
{
    console.log(number*number)
})

//array.from
let ak="nazmul";
let name2=Array.from(ak)//making array
console.log(name2)

//for of
for(let i of ak)
{
    console.log(i)
}
for(let i in ak)
{
    console.log(ak[i])//we cant use console.log(i)->this will show index number
}

//Map, Filter & Reduce 
let arryy=[12,13,125,22,56]
arryy.map((value)=>
{
    console.log(value)
})
let a2=arryy.filter((value)=>
{
    return value>20
})
console.log(a2)
let a3=arryy.reduce((value1,value2)=>
{
    return value1+value2
})
console.log(a3)