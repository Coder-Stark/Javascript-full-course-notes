//PRACTICE SET 12

//write a js program to print the following after 2s delay
//hello , world
const a = async (text) =>{
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
      resolve(text);
    },2000)
  })
}

(
  async ()=>{
    let text = await a('Hello');
    console.log(text)
    text = await a('world');
    console.log(text);
  }
)()

/*OUTPUTS
Hello
world
*/


//write a js program to find average of numbers in an 
//array using spread system
function sum(a , b , c){
  return a + b + c;
}

let x = [ 1 , 3 , 5 ];
console.log(sum(...x));

/*OUTPUTS
9
*/


//write a js function which resolves a promise after 
//n seconds. The function takes n as the parameter use 
//IIFE to execute the functions with different values of n
const b  = async (text , n = 2) => {
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
      resolve(text)
    } , 1000 * n)
  })
};

(
  async ()=>{
    let text = await b('I am resolving after 1 sec' , 1);
    console.log(text)
    text = await b('I am resolving after 2 sec',2);
    console.log(text);
  }
)()

/*OUTPUTS
I am resolving after 1 sec
I am resolving after 2 sec
*/

//write  a simple interest calculator using js
function simpleInterest(p , r ,t ){
  return (p * r * t)/100;
}
console.log(simpleInterest(1000 , 5 , 1));

/*OUTPUT
50
*/