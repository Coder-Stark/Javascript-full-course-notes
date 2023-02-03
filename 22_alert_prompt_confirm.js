//ALERT , PROMPT AND CONFIRM
const prompt = require("prompt-sync")({ sigint : true});

alert("alert is working ");
// prompt(string , default)
let a = prompt("Enter a value of a ", "2334");
a = Number.parseInt(a);

alert("you entered a of type " + (typeof a));

let write = confirm("Do you want to write it to the page ?");
if (write) {
  document.write(a);
}
else {
  document.write("Please allow me to write");
}


/*OUTPUTS
alert is working           (popup) 

Enter a value of a -> 4        (popup)

you entered a of type number    (popup)

Do you want to write it to the page ? -> yes , no 

//yes -> write on the window
//no  -> Please allow me to write

*/
