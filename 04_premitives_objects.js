//PREMETIVE AND OBJECTS

/*
premitive (7 = nn bb ss u) datatypes 
n = null
n = Number
s = Symbol
s = String
b = Boolean
b = BigInt
u = undefined
*/

let a = null;
let b = 12;
let c = Symbol("I am a symbol");
let d = "String";
let e = true;
let f = BigInt(124324235);
let g = undefined;                                //let g  (also undefined)

console.log(a , b , c , d , e , f , g);

console.log(typeof d);


//(non premitive) objects == key value pairs

const objects = {
    name : "shivam",
    rollno : 33,
    good : true,
    bad : undefined
}
console.log(objects["name"]);
console.log(objects["rollno"]);
console.log(objects["good"]);
console.log(objects["bad"]);


/*
null 12 Symbol(I am a symbol) String true 124324235n undefined
string
shivam
33
true
undefined
*/