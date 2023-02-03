//PRACTICE SET 6

//write a program using prompt function to take input of age as a 
//value from the user and use alert to tell him if he can drive
let age = prompt("Enter your age : ");
age = Number.parseInt(age);
if (age >= 18) {
  alert("You can drive ");
}
else {
  alert("You cannot drive");
}


//in previous question use confirm to ask the user if the wants to see the prompt again
let runAgain = true;

while (runAgain) {
  let age = prompt("Enter your age : ");
  age = Number.parseInt(age);
  if (age >= 18) {
    alert("You can drive ");
  }
  else {
    alert("You cannot drive");
  }
  runAgain = confirm("Do you want to play again");
}


//in the previous question, use console error to log the error if the age is negative
let playAgain = true;

while (playAgain) {
  let age = prompt("Enter your age : ");
  age = Number.parseInt(age);
  if (age < 0) {
    console.error("Enter a valid age");
    break;
  }
  if (age >= 18) {
    alert("You can drive ");
  }
  else {
    alert("You cannot drive");
  }
  playAgain = confirm("Do you want to play again");
}


//write a program to change the url to google.com(redirection) if user enters a number
//greater than 4
let num = prompt("Enter the number");
num = Number.parseInt(num);

if (num > 4) {
  location.href = "https://google.com";
}


//change the background of the page to yellow , red or any other color based on user input
let c = prompt("Enter the background color:");
document.body.style.background = c;



/*OUTPUTS
Enter your age :
20
You can drive

Enter your age :
20
You can drive
Do you want to play again
Enter your age :
5
You can not drive

Enter your age :
5
You can not drive
Enter a valid age (in error section of browser)

Enter the number :
5
You can not drive
redirect --->> google home page

Enter the background color:
yellow
(background color change to yellow)


*/