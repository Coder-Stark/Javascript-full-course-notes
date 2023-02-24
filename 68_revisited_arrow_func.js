//ARROW FUNCTIONS REVISITED

const sayHello1 = () => {
  console.log("Hello 1");
}
sayHello1();

const sayHello11 = (name) => {
  console.log("Hello 1 " + name);
}
sayHello11('Shivam');

const sayHello111 = (name, greeting) => {
  console.log(greeting + " " + name);
}
sayHello111('Shivam', 'Good Afternoon');


const sayHello2 = () => console.log("Hello 2");
sayHello2();

const sayHello22 = name => console.log("Hello 2 " + name)
sayHello22("Shivam");

const sayHello222 = (name, greeting) => console.log(greeting + " " + name)
sayHello222("Shivam", 'Good Afternoon');

/*
const x = {
  name:'Shivam',
  role: 'Web Developer',
  exp : 1,
  show : function(){
    let that = this;
    console.log(this);
    setTimeout(function(){
      // console.log(`The name is ${this.name}\nThe role is ${this.role}`);  //show undefined
      console.log(`The name is ${that.name}\nThe role is ${that.role}`);  
    } , 2000)
  }
}
// console.log(x.name , x.role);
x.show();
*/

//alternative

const x = {
  name: 'Shivam',
  role: 'Web Developer',
  exp: 1,
  show: function() {
    //arrow function cant make own this use lexical this.
    setTimeout(() => {
      console.log(`The name is ${this.name}\nThe role is ${this.role}`);
    }, 2000)
  }
}
// console.log(x.name , x.role);
x.show();


/*OUTPUTS

Hello 1
Hello 1 Shivam
Good Afternoon Shivam

Hello 2
Hello 2 Shivam
Good Afternoon Shivam

// {name: 'Shivam', role: 'Web Developer', exp: 1, show: ƒ}
//// Shivam  Web Developer
// The name is Shivam
// The role is Web Developer

// Shivam  Web Developer
The name is Shivam
The role is Web Developer
*/
  