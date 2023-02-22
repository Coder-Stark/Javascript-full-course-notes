//PRACTICE SET 11

//create ajs class to create a complex number create a constructor
//to set the real and the complext part
class Complex{
  constructor(real , imaginary){
    this.real = real;
    this.imaginary = imaginary;
  }
} 

let a = new Complex(2 , 4);
let b = new Complex(4 , 5);


//write a method to add two complex numbers in the above class
class Complex{
  constructor(real , imaginary){
    this.real = real;
    this.imaginary = imaginary;
  }
  add(num){
    this.real = this.real + num.real;
    this.imaginary = this.imaginary + num.imaginary;
  }
}

let a = new Complex(2 , 4);
let b = new Complex(4 , 5);

a.add(b);
console.log(a.real , a.imaginary);
console.log(`${a.real} + ${a.imaginary}i`)


/*OUTPUTS
6 9
6 + 9i
*/


//create a class student from a class human override a method & see changes

class Human{
  constructor(name){
    this.name = name;
  }
  walk(){
    console.log(this.name + " : Human is walking ")  
  }
}

class Student extends Human{
  walk(){
    console.log(this.name + " : Student is walking ");
  }
}

let s = new Student("Shivam");
s.walk();

/*OUTPUTS
Shivam : Student is walking
*/


//see if student is an instance of human using instance of keyword
console.log(s instanceof Human);

/*OUTPUTS
true
*/


//use getters and setters to set and get the real and imaginary
//parts of the complex number
class Complex{
  constructor(real , imaginary){
    this.real = real;
    this.imaginary = imaginary;
  }
  add(num){
    this.real = this.real + num.real;
    this.imaginary = this.imaginary + num.imaginary;
  }
  get real(){
    return this._real;
  }
  get imaginary(){
    return this._imaginary;
  }
  set real(newReal){
    this._real = newReal;
  }
  set imaginary(newImaginary){
    this._imaginary = newImaginary;
  }
}

let a = new Complex(2 , 4);
console.log(a.real , a.imaginary);

a.real = 10;
a.imaginary = 10;
let b = new Complex(4 , 5);
a.add(b);

console.log(a.real , a.imaginary);
console.log(`${a.real} + ${a.imaginary}i`)

/*OUTPUTS
2 4
14 15
14 + 15i
*/