//PRACTICE SET 1

// create a variable of type string and try to add a number to it 
let a = "string";
let b = 3;
let c = a + b;
console.log(c);

//use typeof operator to find the datatype of the string in last question
console.log(typeof c);

//create a const object in js can you change it to hold a number later?
const d = {
    name : "shivam",
    rollno : 33,
    good : true,
    bad : undefined
}
// d = 78;             //error (const)

//try to add a new key to the const object in problem 3 were you able to do it?
d["friend"] = "aditya";
d["name"] = "satyam";           //can change 
console.log(d);

//write a js program to create a word meaning dictionary of 5 words
const dictionary = {
    appreciate :  "to enjoy something or to understand the value of somebody/something",
    random : "chosen by chance",
    loving : "feeling or showing love or care",
    anger : "the strong feeling that you have when something has happened or somebody has done something that you do not like",
    trust : "the belief that somebody is good, honest, sincere, etc. and will not try to harm or trick you"
}
console.log(dictionary["appreciate"]);
console.log(dictionary["random"]);
console.log(dictionary["loving"]);
console.log(dictionary["anger"]);
console.log(dictionary["trust"]);


/*OUTPUT
String3

string

{
  name: 'satyam',
  rollno: 33,
  good: true,
  bad: undefined,
  friend: 'aditya'
}

to enjoy something or to understand the value of somebody/something       
chosen by chance
feeling or showing love or care      
the strong feeling that you have when something has happened or somebody has done something that you do not like
the belief that somebody is good, honest, sincere, etc. and will not try to harm or trick you
*/