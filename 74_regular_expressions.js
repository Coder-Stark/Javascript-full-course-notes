//REGULAR EXPRESSIONS

// const regex = "";                   //chang only first very to VERY
// const text = "Shivam is very very good boy with very very good heart"
// console.log(text.replace("very" , "VERY"));

const regex = /very/g;                   //chang all very to VERY
const text = "Shivam is very very good boy with very very good heart"
console.log(text.replace(regex , "VERY"));

/*OUTPUTS
Shivam is VERY very good boy with very very good heart

Shivam is VERY VERY good boy with VERY VERY good heart
*/

//FOR MORE GO ON WEBSITE ==> REGEXR.COM