//ARRAYS METHODS

let a = [1 , 3 , 4 ,56  , 234];
let b = a.toString();
console.log(b , typeof b);

let c = a.join(" + ");
console.log(c , typeof c);

let r = a.pop();
console.log(r  , a);                                    //remove element from last & return last element

let x = a.push(23);
console.log(a);                                         //add element to end of array

let y = a.shift();                                      //remove element from start of array & return first element
console.log(a);

let z = a.unshift(65);                                  //add element to start of array & return array lenght
console.log(z , a);


let h = [1 ,4 , 64 , 2 , 75, 32 , 11];
h.sort();                                               //sort on the bases of 1st character
console.log(h);

let compare = (a , b)=>{
    return a-b;
    // return b-a;                                      //for decreasing order sorting
} 
h.sort(compare);
console.log(h);

h.reverse();
console.log(h);

//splice(start , no. of element remove ,add[] , )
let i = [ 1 , 3 , 5 ,  7 , 9 , 10 , 12 ,15]
i.splice(2 , 3 , 1022 , 1222 , 1333);
console.log(i);


//from there methods are not change its original array
let d = [11 , 33 , 55 , 66 , 22];
console.log(d.length);
delete d[0];                                             //doesnot effect on array's length
console.log(d);
console.log(d.length);

let e = [1 , 2 , 4 , 5];
let f = [3 , 6 , 7 ,8];
let g = [ 11 , 4423 , 534];
let newArray = e.concat(f , g);
console.log(newArray);

//slice(starting index,ending index)
let j = [ 23 , 32 , 45 , 54 , 65 ,67];
console.log(j.slice(2,5));
console.log(j.slice(2));




/*OUTPUT
1,3,4,56,234 string

1 + 3 + 4 + 56 + 234 string

234 [ 1, 3, 4, 56 ]

[ 1, 3, 4, 56, 23 ]

[ 3, 4, 56, 23 ]

5 [ 65, 3, 4, 56, 23 ]

[ 1, 11,  2, 32, 4, 64, 75 ]

[ 1,  2,  4, 11, 32, 64, 75 ]

[ 75, 64, 32, 11, 4,  2,  1 ]

[ 1, 3, 1022, 1222, 1333, 10, 12, 15 ]

5
[ <1 empty item>, 33, 55, 66, 22 ]
5

[ 1, 2, 4, 5, 3, 6, 7, 8, 11, 4423, 534 ]

[ 45, 54, 65 ]
[ 45, 54, 65, 67 ]
*/