//LOOP WITH ARRAYS

let a = [ 2, 3, 4 , 6 ,7 , 8];
for(let i = 0 ; i < a.length ; i++){
    console.log(a[i]);
}

//forEach Loop
a.forEach((element)=>{
    console.log(element*element);
})

//array.from
let name = "Shivam";
let arr = Array.from(name);
console.log(arr);

//for....of
for(let e of a){
    console.log(e);                                //gives items of an array
}

//for....in
for(let e in a){
    // console.log(e);                                //gives index{keys}(like in object) of arrays
    console.log(a[e]);                             //gives items of an array
}


/*OUTPUT
2
3
4
6
7
8

4
9
16
36
49
64

[ 'S', 'h', 'i', 'v', 'a', 'm' ]2

3
4
6
7
8

0
1
2
3
4
5

// 2
// 3
// 4
// 6
// 7
// 8
*/