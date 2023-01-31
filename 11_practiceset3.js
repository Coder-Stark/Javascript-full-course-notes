//PRACTICE SET 3

//write a program to print the marks of a student in an object using for loop

const marks = {
    shivam : 99,
    ram : 89,
    shyam : 78
}
// console.log(marks["shivam"]);
// console.log(marks["ram"]);
// console.log(marks["shyam"]);

for(let i = 0 ; i < Object.keys(marks).length ; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}


//write the program in question 1 using for in loop
for(let key in marks){
    console.log("The marks of " + key +" are " +  marks[key]);
}


//write a program to print "Try again" until the user enters the correct number
// let x = 10;
// let y;

// while(x != y){
//     console.log("Try again");
//     y = prompt("Enter a number");
// }
// console.log("You have entered a correct number");


//write a function to find mean of 5 numbers
const mean = (a , b , c , d , e)=>{
    return (a + b + c + d + e)/5;
}
console.log("mean of 5 numbers : " + mean( 1 , 2 , 3  , 4 , 5 ));

/*OUTPUT
// 99
// 89
// 78
The marks of shivam are 99
The marks of ram are 89
The marks of shyam are 78

The marks of shivam are 99
The marks of ram are 89
The marks of shyam are 78

(IN REPLETT NOT IN VSCODE)
Enter a number 1
Try again
Enter a number 2
Try again
Enter a number 5
Try again
Enter a number 6
Try again
Enter a number 10
You have entered a correct number

mean of 5 numbers : 3
*/