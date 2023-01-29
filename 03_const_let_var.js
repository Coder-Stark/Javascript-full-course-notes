//CONST vs LET vs VAR

// const == constant
// let  ==  blocked scoped variables
// var == globaly scoped , not recommended

var a = 23;
var b = "shivam";
let b1 = "shivam";

var e = 2;
var e = 3;                //no error(redeclaration)
e = 3;                    //no error(updation)
console.log(e);

let f = "kumar";
// let f = 6;             //error(redeclaration)
f = 6;                    //no error(updation)
console.log(f);

const g = "author";
// const g = "name";      //error (redeclaration)
// g = "anything";        //error (updation)
// const x;               //erro  (initialization neccessary)
console.log(g);

//var
{
    var b = "this";
    console.log(b);
}
console.log(b);

//let
{
    let b1 = "this";
    console.log(b1);
}
console.log(b1);


/*OUTPUT
3
6
author
this
this
this
shivam
*/