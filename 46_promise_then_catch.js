//PROMISE .THEN() AND .CATCH()

// let p = new Promise((resolve, reject) => {
//   console.log("promise is pending")
//   setTimeout(() => {
//     // console.log('I am a promise and i am fulfilled');
//     // resolve(true);
//     console.log('I am a promise and i am rejected');
//     reject(new Error('I am an error'))
//   }, 5000);
// })
// console.log(p);

let p1 = new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    // console.log('I am a promise and i am fulfilled');
    resolve(true);
  }, 5000);
});
let p2 = new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    // console.log('I am a promise and i am rejected');
    reject(new Error("I am an error"));
  }, 5000);
});

//to get the value
p1.then((value) => {
  console.log(value);
});

//to get/catch the error
p2.catch((error) => {
  console.log("some error occured in p2");
});

//to catch error with correct line
p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);

/*OUTPUTS
  // promise is pending
  // Promise {<pending>}
  // I am a promise and i am fulfilled
  
  // promise is pending
  // Promise {<pending>}
  // I am a promise and i am rejected
  // Uncaught (in promise) Error: I am an error
  //     at script.js:7:12
  
  
  promise is pending
  promise is pending
  // I am a promise and i am fulfilled
  true
  // I am a promise and i am rejected
  some error occured in p2
  Error: I am an error
      at script.js:24:12
  */
