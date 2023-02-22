//DESTRUCTURING

//no need to do this
// let a = arr[0];
// let b = arr[1];
// console.log(a , b);

// let arr = [3 , 5];
// let [a , b] = arr;
// console.log(a , b);

// let arr = [3 , 5 , 7 , 9 , 23 , 453 , 345];
// let [a , b , c , d, ...rest] = arr;
// console.log(a , b , c ,d , rest );

let arr = [3 , 5 , 7 , 9 , 23 , 453 , 345];
let [a , , , ...rest] = arr;
console.log(a , b)



/*OUTPUTS
// 3 5

// 3 5 7 9 [ 23, 453, 345 ]
*/