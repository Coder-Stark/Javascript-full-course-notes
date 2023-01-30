//OPERATORS AND EXPRESSIONS

console.log("operators in js")
let a = 6;
let b = 2;

//arithmetic operators
console.log("a + b : " , a + b);
console.log("a - b : " , a - b);
console.log("a * b : " , a * b);
console.log("a / b : " , a / b);
console.log("a % b : " , a % b);
console.log("a ** b : " , a ** b);

console.log("a++ : " , a++);
console.log("a : " , a );

console.log(" ++a : " , ++a);
console.log("a : " , a );

console.log("a-- : " , a--);
console.log("a : " , a );

console.log(" --a : " , --a);
console.log("a : " , a );

//assignment operator
let  c = 5;
c += 5;
console.log("c : ", c);
c -= 5;
console.log("c : ", c);
c *= 5;
console.log("c : ", c);
c /= 5;
console.log("c : ", c);
c %= 5;
console.log("c : ", c);
c **= 5;
console.log("c : ", c);

//comparision operator
let d = 6;
let e = "6";

console.log("d == e : ",d == e);
console.log("d === e : ",d === e);
console.log("d != e : ",d != e);
console.log("d !== e : ",d !== e);
console.log("d <= e : ",d <= e);
console.log("d < e : ",d < e);
console.log("d >= e :  ",d >=e);
console.log("d > e : ",d > e);

//logical operator
let f = 4 ;
let g = 3;

console.log( "f > g && f == 4 : ",f > g && f == 4);
console.log( "f > g || f == 4 : " ,f > g || f == 4);
console.log("!true : " , !true);


/*OUTPUT
operators in js
a + b :  8
a - b :  4
a * b :  12
a / b :  3
a % b :  0
a ** b :  36
a++ :  6
a :  7
 ++a :  8
a :  8
a-- :  8
a :  7
 --a :  6
a :  6
c :  10
c :  5
c :  25
c :  5
c :  0
c :  0
d == e :  true
d === e :  false
d != e :  false
d !== e :  true
d <= e :  true
d < e :  false
d >= e :   true
d > e :  false
f > g && f == 4 :  true
f > g || f == 4 :  true
!true :  false
*/
