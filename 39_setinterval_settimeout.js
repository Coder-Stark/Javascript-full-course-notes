//SETINTERVAL AND SETTIMEOUT

// document.write("hello");

let a = setTimeout(() => {
  alert("i am inside of setTimeout");
}, 2000);

let b = prompt("Do you want to run the setTimeout?");
if ("n" == b) {
  clearTimeout(a);
}
console.log(a);

//setTimeout(fun , delay , arg1 , arg2 ---);
const sum = (a, b) => {
  console.log("yes i am running ", a + b);
};
let t = setTimeout(sum, 2000, 1, 2);
clearTimeout(t);


setInterval(() => {
  alert("setInterval");
}, 3000);

//setInterval(fun , delay , arg1 , arg2 ---);
const mul = (x, y) => {
  console.log("yes i am running too ", x * y);
};
const i = setInterval(mul, 5000, 2, 4);
clearInterval(i);


/*OUTPUTS
i am inside of setTimeout      (after 2sec) 

pop->(Do you want to run the setTimeout?)
yes = i am inside of setTimeout
no = clearTimeout(stop fun)

yes i am running 3 (after 2 sec)

setinterval(popup at interval of 3sec)

yes i am running 8 (after 5 sec)

*/