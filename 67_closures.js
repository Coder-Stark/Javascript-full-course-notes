//CLOSURES

//CLOSURE ==> it is a function along with it lexical environment

/*
let message = 'Good Global'
function hello1(){
  let message = 'Good Morning';
  {
    let message = 'Good Afternoon';
    console.log('Hello 1 '+ message);
  }
  console.log(message);
}
hello1();
*/


let message = 'Good Global'
function hello1() {
  let message = 'Good Morning';
  // let message = 'Good Afternoon';
  console.log('Hello 1 ' + message);
  let c = function hello2() {
    console.log("I am c " + message);
  }
  return c;
}
c = hello1();
c();

function init() {
  var name = 'Mozilla';     //name is a local variable created by init
  function displayName() {
    //displayName() is the inner function , a closure
    console.log(name);      //use variable declared int the parent function
  }
  name = 'Shivam'
  return displayName;
}
let d = init();
d()


//nested function in closure
function returnFunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
      // let a = 2;
      console.log(a); 
      const z = () => {
        // let a = 3;
        console.log(a);
      }
      z();
    }
    a = 999;
    y();
  }
  return x;
}

let a = returnFunc();
a();
/*OUTPUTS
Hello 1 Good Afternoon
// Good Morning

Hello 1 Good Morning
I am c Good Morning

Shivam

1
// 2
// 3
999
999 

*/