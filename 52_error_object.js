//ERROR OBJECT

/*
try {
  // shivam;
  // throw new Error("shivam is bad boy");
  // throw new ReferenceError("shivam is bad boy");

  console.log(harry);
  throw new ReferenceError("shivam is bad boy");
}
catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}
*/

try {
  let age = prompt('Enter your age');
  age = Number.parseInt(age);
  if (age > 150) {
    throw new ReferenceError('This is probably not true ')
  }
}
catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}
console.log('The script is still running ');

/*OUTPUTS
ReferenceError
shivam is not defined

Error
shivam is bad boy

ReferenceError
shivam is bad boy

ReferenceError
harry is not defined
ReferenceError: harry is not defined
    at script.js


//after entering 150>
ReferenceError
This is probably not true
ReferenceError: This is probably not true
    at script.js
The script is still running
*/