//STRINGS METHODS  ( stings are immutable(can not change / new string made))

let name = 'shivam';
console.log(name.length);

console.log(name.toUpperCase());
 
console.log(name.toLowerCase());

console.log(name.slice(2 , 4));   //print from index 2 to 3 (not 4)

console.log(name.slice(2));       //print from index 2 to end

console.log(name.replace("shi","ri"));

let frd = "vikas";
console.log(name.concat(" is a friend of " , frd , " kumar "));

let grl = "            random              ";
console.log(grl.trim());


/*OUTPUT
6

SHIVAM

shivam

iv

ivam

rivam

shivam is a friend of vikas kumar

random
 */