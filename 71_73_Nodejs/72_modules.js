//MODULES
//from module1.js

//COMMON JS MODULES
// const hello = require("./module1");
// // hello();

// hello.hello();
// hello.ahello("Aditya");
// hello.ahello("Satyam");
// hello.ahello("Anjali");


const {hello , ahello} = require("./module1");
// hello();

hello();
ahello("Aditya");
ahello("Satyam");
ahello("Anjali");


/*OUTPUTS
// //Hello Shivam

// Hello Shivam
// Hello Aditya
// Hello Satyam
// Hello Anjali

Hello Shivam
Hello Aditya
Hello Satyam
Hello Anjali
*/


//ES6 MODULES
import Shivam , {hello , ahello} from "./module2.js";

hello();

ahello("Aditya");
ahello("Satyam");
ahello("Anjali");

Shivam();

/*OUTPUTS
Hello Shivam

Hello Aditya
Hello Satyam
Hello Anjali

Hello Shivam Rajbhar
*/
