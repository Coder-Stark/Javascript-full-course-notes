//PRACTICE SET 4

//what will the following print in js console.log("har\".length")
console.log("har\"".length);

//explore the includes , starts with &ends with functions of a string
const sentence = "i am good boy";
const word = "good";
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? ' is ' : ' is not '} in the sentence`);

console.log(sentence.startsWith(word));
console.log(`The word "${word}" ${sentence.startsWith(word) ? ' is ' : ' is not '} starting word `);

console.log(sentence.endsWith("boy"));
console.log(`The word "${"boy"}" ${sentence.endsWith("boy") ? ' is ' : ' is not '} ending word `);


//write a program to convert a given string to lowercase
let str = "Shivam";
console.log(str.toUpperCase());

//extract the amount of this string
let s = "please give rs 1000";
// let amount = s.slice("please give rs ".length);              
let amount = Number.parseInt(s.slice("please give rs ".length));                   //to convert to int datatype
console.log(amount);
console.log(typeof amount);

//try to change 4th character of a given string were you able to do it?
let name = "shivam";
name[3] = "r";
console.log(name);                                                                //cant change because the string is immutable


/*OUTPUT
4

true
The word "good"  is  in the sentence

false
The word "good"  is not  starting word

true
The word "boy"  is  ending word 

SHIVAM

1000
number

shivam 
*/
