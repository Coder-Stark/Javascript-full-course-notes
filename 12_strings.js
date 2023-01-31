//STRINGS

let name = "shivam";
console.log(name.length);

let frd = 'aditya';
console.log(frd.length);

console.log(frd[0]);
console.log(frd[2]);
console.log(frd[5]);

//Template Literals
//string interpolation : we can insert variable directly in template lateral
let a = "shivam";
let b = "tushar";
let sentance = `${a} is a friend of ${b}`;
console.log(sentance);

//Escape Sequence Characters(\' , \n ,  \t , \r(The \r metacharacter matches carriage return characters.))
let c = 'bana\'na';
console.log(c);
console.log(c.length);

let d = 'bana\nna';
console.log(d);

let e = 'bana\tna';
console.log(e);

let f = 'bana\rna';
console.log(f);


/*OUTPUT
6

6

a
i
a

shivam is a friend of tushar

bana'na
7

bana
na

bana    na

nana
 */