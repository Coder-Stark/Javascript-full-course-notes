//PROMISES

//promise use for parallel execution

/*
Fetch google.com homepage --> console.log('google.com homepae done')
Fetch data from the data api --> console.log('data from the data api done')
Fetch picture from the server --> console.log('picture from the server done ')

rest of script working 
*/

let promise = new Promise(function(resolve , reject){
    alert('Hello');
    resolve(45);
})
console.log('Hello one');
setTimeout(()=>{
    console.log('Hello two after 2 sec');
},2000);
console.log('Hello three');
console.log(promise);
  
  
/*OUTPUTS
Hello
Hello one
Hello three
Promise { 45 }
Hint: hit control+c anytime to enter REPL.
Hello two after 2 sec
*/