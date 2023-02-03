//CONSOLE OBJECT

// console.log(console);
console.log("hi shivam");

console.error("This is an error , show in red color in browser");

console.assert(5>8);

// console.clear();

obj = {
    a : 1,
    b : 2,
    c : 3
}
console.table(obj);

console.warn("This is warning , show in yellow color in browser")

console.info("This is in info option in browser");

console.time("a");
console.timeEnd("a");

console.time('forloop')
for(let i = 0 ; i < 5 ; i++){
    console.log(22);
}
console.timeEnd('forloop');

console.time('whileloop');
let i = 0
while(i < 5){
    console.log(22);
    i++
}
console.timeEnd('whileloop');


/*OUTPUTS
hi shivam

This is an error , show in red color in browser

Assertion failed

┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    a    │   1    │
│    b    │   2    │
│    c    │   3    │
└─────────┴────────┘

This is warning , show in yellow color in browser

This is in info option in browser

a: 0.106ms

22
22
22
22
22
forloop: 2.565ms

22
22
22
22
22
whileloop: 2.069ms
*/