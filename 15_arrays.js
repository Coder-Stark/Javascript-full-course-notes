//ARRAYS  (arrays are mutable(can be change))

let a = [1 , 2 , 3 , 4 , 5 , null , true , "pass"];
console.log(a);

console.log(a[2]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);

console.log(a[8]);                      //undefined

console.log(a.length);

a[8] = 7;                               //adding a new value to the array
console.log(a);
console.log(a.length);                  

a[0] = 9;                               //changing a value of the array
console.log(a);
console.log(typeof a);

//print array using for loop
let i = 0;
for(i = 0 ; i < a.length ; i++){
    console.log(a[i]);
}


/*OUTPUT
[ 1, 2, 3, 4, 5, null, true, 'pass' ]

3
null
true
pass

undefined

8

[ 1, 2, 3, 4, 5, null, true, 'pass', 7 ]
9

[ 9, 2, 3, 4, 5, null, true, 'pass', 7 ]

object

9
2
3
4
5
null
true
pass
7
 */