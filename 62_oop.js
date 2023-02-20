//OBJECT ORIENTED PROGRAMMING (OOPS)

//PROTOTYPES AND PROTO
let a = {
  name2 : "Shivam",
  language : "JavaScript"
}
console.log(a);

let p = {
  run:()=>{
    alert('run');
  }
}

p.__proto__ = {
  name : "Jackie"
}

a.__proto__ = p;
a.run();
console.log(a.name);


/*OUTPUTS
{name: 'Shivam', language: 'JavaScript'}

language: "JavaScript"
name: "Shivam"
[[Prototype]]: Object
a.toString();
'[object Object]'
a.valueOf();
{name: 'Shivam', language: 'JavaScript'}

Jackie
*/


//CLASSES(template) AND OBJECTS(entity)

class railwayForm{
  submit(){
    alert(this.name + ' : Form is submitted for train number : ' + this.trainNo);
  }
  cancel(){
    alert(this.name + ' : Form is cancelled for train number : ' + this.trainNo);
  }
  fill(givenName , trainNo){
    this.name = givenName;
    this.trainNo = trainNo;
  }
}
//create a form for harry
let harry = new railwayForm();
//fill the form with harry's details
harry.fill("Harry" , 12555);
//create a form for harry
let shiva1 = new railwayForm();
let shiva2 = new railwayForm();
//fill the form with harry's details
shiva1.fill("Shivam" , 12556);
shiva2.fill("Shivam" , 12557);

harry.submit();
shiva1.submit();
shiva2.submit();
shiva1.cancel();

/*OUTPUTS
Harry : Form is submitted for train number : 12555
Shivam : Form is submitted for train number : 12556
Shivam : Form is submitted for train number : 12557
Shivam : Form is cancelled for train number : 12556
*/


//INHERITANCE AND EXTENDS KEYWORDS

class Animal{
  constructor(name , color){
    this.name = name;
    this.color = color;
  }
  run(){
    console.log(this.name + ' is running ');
  }
  shout(){
    console.log(this.name + ' is shouting ');
  }
}

class Monkey extends Animal{
  eatBanana(){
    console.log(this.name + ' is eating banana');
  }
  hide(){
    console.log(`${this.name} is hiding`)
  }
}

let ani = new Animal('Bruno' , 'white');
let mon = new Monkey('Chimpu' , 'orange');

ani.shout();
mon.eatBanana();
mon.hide();

// ani.hide();                    //error


/*OUTPUTS
Bruno is shouting 
Chimpu is eating banana
Chimpu is hiding
*/


//METHOD OVERRIDING

class Employee{
  logIn(){
    console.log(`Employee has logged in `);
  }
  logOut(){
    console.log(`Employee has logged out `);
  }
  requestLeaves(leaves){
    console.log(`Employee has requested ${leaves} leaves - Auto approved `);
  }
}

class Programmer extends Employee{
  requestCoffee(x){
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeaves(leaves){
    super.requestLeaves(4);
    console.log('One extra is granted ')
    // console.log(`Employee has requested ${leaves + 1} leaves (one extra) `);
  }
}

let e = new Employee;
e.logIn();
e.requestLeaves(3);

let p = new Programmer;
p.logIn();
p.requestLeaves(3);


/*OUTPUTS
Employee has logged in 
Employee has requested 3 leaves - Auto approved 
Employee has logged in 
Employee has requested 4 leaves - Auto approved 
One extra is granted 

//Employee has requested 4 leaves (one extra) 
*/


//METHOD OVERRIDING WITH CONSTRUCTOR

class Employee {
  // constructor(){
  //   console.log("Employee's constructor is here");
  // }
  constructor(name) {
    console.log(`${name} - Employee's constructor is here`);
  }
  logIn() {
    console.log(`Employee has logged in `);
  }
  logOut() {
    console.log(`Employee has logged out `);
  }
  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves} leaves - Auto approved `);
  }
}

class Programmer extends Employee {
  //AUTOMATICALLY CALLS
  // constructor(...arg){
  //   super(...arg);
  // }

  constructor(name) {
    super(name);
    console.log(`${name} - Programmer's constructor is here , This is a newly written constructor`);
  }
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeaves(leaves) {
    super.requestLeaves(4);
    console.log('One extra is granted ')
    // console.log(`Employee has requested ${leaves + 1} leaves (one extra) `);
  }
}

// let p = new Programmer;
let p = new Programmer("Shivam");
p.logIn();
p.requestLeaves(3);


/*OUTPUTS
// Employee's constructor is here
// Employee has logged in
// Employee has requested 4 leaves - Auto approved
// One extra is granted

// Shivam - Employee's constructor is here
// Employee has logged in
// Employee has requested 4 leaves - Auto approved
// One extra is granted

Shivam - Employee's constructor is here
Shivam - Programmer's constructor is here , This is a newly written constructor
Employee has logged in
Employee has requested 4 leaves - Auto approved
One extra is granted
*/

