//ERROR HANDLING TRY AND CATCH

setTimeout(() => {
  console.log('Hacking wifi....Please wait....');
}, 1000);

//try can handle synchronous code
try {
  console.log(rahul);
}
/* not work on asynchronous(timeout) 
try{
  setTimeout(()=>{
    console.log(rahul);
  },100);
}
*/
catch (error) {
  console.log(error);
}
setTimeout(() => {
  console.log('Fetching username and password....Please wait....');
}, 2000);
setTimeout(() => {
  console.log('Hacking Rahul fb id....Please wait....');
}, 3000);
setTimeout(() => {
  console.log('Username and Password of Rahul (+99976680) fetched...Please wait....');
}, 4000);


/*OUTPUTS
ReferenceError: rahul is not defined
    at script.js:7:15
Hacking wifi....Please wait....
Fetching username and password....Please wait....
Hacking Rahul fb id....Please wait....
Username and Password of Rahul (+99976680) fetched...Please wait....
*/