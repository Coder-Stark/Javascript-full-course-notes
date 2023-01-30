//PRACTISE SET - 2

//use logical operators to find whether the age of a person lies between 10 and 20
// let age = prompt("What is your age : ");
//age = Number.parseInt(age);

let age = 12;

if(age > 10 && age < 20){
    console.log("The age is  under 10 and 20 ");
}
else{
    console.log("The age is not under 10 and 20 ");
}

//demonstrate the use of switch case statement in js
let number = '1';

switch(number){
    case '1':
        console.log("number is 1 ");
        break;
    case "2":
        console.log("number is 2 ");
        break;
    case "3":
        console.log("number is 3 ");
        break;
    case "4":
        console.log("number is 4 ");
        break;
    default:
        console.log("invalid number ")
}


//write a js program to find whether a number is a divisible by 2 and 3
let n = 5;

if( n % 2 == 0 && n % 3 == 0){
    console.log("The number is divisible by 2 and 3");
}
else{
    console.log("The number is not divisible 2 and 3 ")
}


//write a js program to find whether a number is divisible by either 2 and 3 
let x = 4;

if( x % 2 == 0 || x % 3 == 0){
    console.log("The number is divisible by 2 or 3");
}
else{
    console.log("The number is not divisible 2 or 3 ");
}


//print "you can drive: or "you cannot drive" based on age being greater than 18 using ternary operator
let ag = 19;

if(ag > 18){
    console.log("You can drive ");
}
else{
    console.log("You cannot drive ");
}

//or
let ag1 = 12;
let b = ag1 > 18 ? "You can drive ":"You cannot drive ";

console.log(b);


/*OUTPUT
The age is  under 10 and 20 

number is 1 

The number is not divisible 2 and 3  

The number is divisible by 2 or 3

You can drive

You cannot drive
 */
