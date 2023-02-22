//LOCAL AND GLOBAL SCOPE

//local ==> block scope and function scope  &  global ==> global scope
{
  var a = 8;
}
console.log(a);

// {
//   let b = 9;
// }
// console.log(b);

function c(){
  let d = 3;
  console.log(d);
}
c();

/*OUTPUTS
8               // var is a global scope
ERROR           //let is a block scope
3               //c() is a function scope
*/