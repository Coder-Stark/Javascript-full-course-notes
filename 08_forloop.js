//FOR LOOPS

//PROGRAM TO ADD FIRST N NATURAL NUMBERS
let sum = 0;
// let n = prompt("Enter the value of n : ");
// n = Number.parseInt(n);
let n = 10;
for(let i = 1 ; i < 5 ; i++){
    sum += i;
}
console.log("sum of first n natural number is : " , n + sum);

//FOR IN LOOP(for objects and arrays)

let obj = {
    shivam : 90,
    aditya : 89,
    satyam : 34,
    tushar : 78
}
for(let a in obj){
    // console.log("marks of key are values : " , a + obj[a] );
    console.log("marks of key " + a + " are values : " + obj[a] );
}

//FOR OF LOOP(iterable datastructures{arrays , strings etc.  })
for(let b of "shivam"){
    console.log(b);
}


/*OUTPUT
sum of first n natural number is :  20
marks of key shivam are values : 90
marks of key aditya are values : 89
marks of key satyam are values : 34
marks of key tushar are values : 78
s
h
i
v
a
m
 */
