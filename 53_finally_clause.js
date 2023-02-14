//FINALLY CLAUSE

try {
  let a = 0;
  console.log(program);
  console.log('Program ran successfully');
}
catch (err) {
  console.log("This is an error ");
  console.log(p);
}
//works even if catch have also an error
finally {
  console.log('I am a good boy ');
}


/*OUTPUTS
This is an error
I am a good boy
Uncaught ReferenceError: p is not defined
    at script.js
*/