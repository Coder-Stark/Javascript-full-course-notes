//IIFE(immediately invoked function expression)
let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 4000)
  })
}

/*
let f = async () => {

  let b = await a();
  console.log(b);
  let c = await a();
  console.log(c);
  let d = await a();
  console.log(d);
}
f();
*/``
(async () => {

  let b = await a();
  console.log(b);
  let c = await a();
  console.log(c);
  let d = await a();
  console.log(d);
})();

/*OUTPUTS
// 45
// 45
// 45
45
45
45
*/