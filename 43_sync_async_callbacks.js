//SYNCHRONOUS , ASYNCHRONOUS AND CALLBACKS

// syncronous program
let a = prompt("What is your name ? : ");
let b = prompt("What is your age ? : ");
let c = prompt("What is your favourite color ? : ");

console.log(a + " is " + b + " years old and has " + c + " favourite color ");


//aynchronous program
console.log("start");
setTimeout(() => {
  console.log("hey i am good");
}, 3000);
console.log("end");


// callbacks and error handling
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);

  //for show in console
  script.onload = () => {
    console.log("script is loaded with src : " + src);
    callback(null, src);
  };
  script.onerror = () => {
    console.log("Error with src : " + src);
    callback(new Error("src got some error"));
  };
}

function hello(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("hello World " + src);
}
loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
  hello
);


/*OUTPUTS
What is your name ? : > Shivam Kumar
What is your age ? : > 21
What is your favourite color ? : > skyblue

Shivam Kumar is 21 years old and has skyblue favourite color 


start
end
hey i am good


IF SCRIPT IS CORRECT
script is loaded with src : https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js
  
IF SCRIPT IS INCORRECT(ERROR HANDLING)
Error with src : https://cdnshiv.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js
Error: src got some error
    at script.onerror (script.js:13:14)
*/
