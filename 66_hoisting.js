//HOISTING

greet();
function greet(){
  console.log("Good Morning");
}

console.log(a);
var a;

console.log(b);
var b = 3;                 //declaration hoisted to the top but not initialization
console.log(b);

// console.log(c);         //error
let c = 4;
console.log(c);

// console.log(c);         //error
const d = 5;
console.log(d);

//function expressions and class expressions are not hoisted
/*
greet();                      //error - function expressions and class expressions are not hoisted
const greet=()=>{
  console.log("Good Night");
}

// greet();                      //error - function expressions and class expressions are not hoisted
var greet=()=>{
  console.log("Good Night");
}
*/

/*OUTPUTS
Good Morning

undefined

undefined
3

//error
4

//error
5
*/