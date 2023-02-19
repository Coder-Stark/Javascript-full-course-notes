//LOCALSTORAGE AND RELATED METHOD

let key = prompt("Enter key you want to set");
let value = prompt("Enter value you want to set");

localStorage.setItem(key,value);

console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if(key == 'red' || key == 'blue'){
  localStorage.removeItem(key);
}

if(key == 0){
  localStorage.clear();
}

/*OUTPUTS
The value at color is black

//storage removed from localStorage
The value at red is 000

//all storage clear
The value at 0 is 5

//in console
localStorage.le
undefined
localStorage.length;
3
localStorage.key(0);
'name'
localStorage.key(1);
'branch'
localStorage.key(2);
'rollno.'
localStorage.key(3);
null

*/