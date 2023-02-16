//COOKIES IN JAVASCRIPT

console.log(document.cookie);
document.cookie = "name = Shivam0987";
document.cookie = "name2 = Shivam09876";
document.cookie = "name = Shivam";

let key = prompt("Enter your key");
let value = prompt("Enter your value");

document.cookie = `${key} = ${value}`

document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
console.log(document.cookie);


/*OUTPUTS
name2=Shivam09876; null=null; albert=einstein; name=Shivam; akjdfa; akjdfa%3B%3B%3B=13
name2=Shivam09876; null=null; albert=einstein; akjdfa%3B%3B%3B=13; name=Shivam; a; a%3B%3B=67

decodeURIComponent("a%3B%3B")
->a;;
*/