//PROMISE API

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('value 1');
  }, 1000)
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('value 2');
    /// reject(new Error('error'));
    resolve('value 2');
  }, 2000)
})
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('value 3');
  }, 3000)
})

/*
p1.then((value) => {
  console.log(value);
})
p2.then((value) => {
  console.log(value);
})
p3.then((value) => {
  console.log(value);
})
*/


// let promise_all = Promise.all([p1 , p2 , p3]);               //wait for resolve , return array, through error if any

/// let promise_all = Promise.allSettled([p1, p2, p3]);         //wait for resolve , return array,  NOT through error if any

//// let promise_all = Promise.race([p1, p2, p3]);              //wait for resolve and error and FCFS

///// let promise_all = Promise.any([p1, p2, p3]);              //wait for resolve only till last

// let promise_all = Promise.resolve(6);                        //direct resolve result

let promise_all = Promise.reject(new Error('error created'));   //direct reject result
promise_all.then((value) => {
  console.log(value);
})


/*OUTPUTS

/ value 1
/ value 2
/ value 3


// (3) ['value 1', 'value 2', 'value 3']

/// (3) [{…}, {…}, {…}]
/// 0: {status: 'fulfilled', value: 'value 1'}
/// 1: {status: 'rejected', reason: Error: error at https://522.coder-stark.repl.co/script.js:9:12}
/// 2: {status: 'fulfilled', value: 'value 3'}
/// length: 3

////value 1

/////value 1

/////6

/////Uncaught (in promise) Error: error created


*/
  
  
  