//MAP FILTER AND REDUCE
//map makes new array vs forEach is a loop

//map (cant modify real array)
//returns array
let arr = [34 , 343 , 233];
let a = arr.map((value)=>{
    return value + 1;
})
console.log(arr);
console.log(a);

// (value,index,array)     Arguments for map and forEach both 
let b = arr.map((value, index , array)=>{
    return value + 1;
})
console.log(arr);
console.log(b);


//filter (cant modify real array)
//returns array
let arr2 = [34 , 22 , 534 , 2323 , 23];
let c = arr2.filter((a)=>{
    return a<300;
})
console.log(arr2);
console.log(c);


//reduce (cant modify real array)
//returns value
let arr3 = [1 ,2  , 5 , 223 , 299, 532];
let d = arr3.reduce((h1 , h2)=>{
    return h1 + h2;
})
console.log(arr3);
console.log(d);


/*OUTPUTS
[ 34, 343, 233 ]
[ 35, 344, 234 ]

[ 34, 343, 233 ]
[ 35, 344, 234 ]

[ 34, 22, 534, 2323, 23 ]       
[ 34, 22, 23 ]

[ 1, 2, 5, 223, 299, 532 ]      
1062
*/
