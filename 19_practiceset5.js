//PRACTICE SET 5
const prompt = require("prompt-sync")({ sigint : true});

//create an array of numbers and take input from the user to add numbers to this array
let a = [1 , 2 , 32 , 5 , 6];
let b = prompt("Enter a number : ");
b = Number.parseInt(b);
a.push(b);
console.log(a);

//keep adding numbers to the array in previous question until 0 is added to the array

let c = [1 , 2 , 32 , 5 , 6];
let d;
do{
    d = prompt("Enter a number");
    d = Number.parseInt(d);
    c.push(d);
}while(d != 0);

console.log(c);          //print wrong arrays


//filter for numbers divisible by 10 form a given array
let e = [20 , 13 , 50 , 90 , 100 , 105];
let f = e.filter((x)=>{
    return x % 10 == 0;
})
console.log(f);


//create an array of square of given numbers
let g = [ 1 , 2 , 3 , 4 , 5 , 6];
let h = g.map((x)=>{
    return x * x;
});
console.log(h);


//use reduce to calculate factorial of a given number from an array of first n natural numbers from an array of first
//n natural numbers (n being the number whose factorial needs to be caluculated)
let i = [1 , 2 , 3 , 4 , 5 , 6 , 7];
let j = i.reduce((x , y)=>{
    return x * y;
});
console.log(j);


/*OUTPUTS

Enter a number : 5
[ 1, 2, 32, 5, 6, 5 ]

Enter a number6
Enter a number3
Enter a number2
Enter a number3
Enter a number50
Enter a number0
[1, 2, 32, 5,  6, 6, 3,  2, 3, 50,0 ]           //stop at enter 0 

[ 20, 50, 90, 100 ]

[ 1, 4, 9, 16, 25, 36 ]

5040 
*/