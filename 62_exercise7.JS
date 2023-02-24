//EXERCISE 7

//create a js program capable of generating a password which contains
//atleast one lowercase one uppercase and one special characters create 
//a password class to achive the same

class Password{
  constructor(){
    console.log("Welcome to password generator ");
    this.pass = "";
  }
  generatePassword(len){
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "1234567890";
    let special = "~!@#$%^&*()[]{}\|/?.,<>`"
    if(len < 3){
      console.log("Your password should atleast 3 characters long ");
    }
    else{
      let i = 0 
      while(i < len){
        this.pass += chars[Math.floor(Math.random() * chars.length)]
        this.pass += numbers[Math.floor(Math.random() * numbers.length)]
        this.pass += special[Math.floor(Math.random() * special.length)]

        i = i + 3;
      }
      this.pass = this.pass.substr(0 , len);
      return this.pass;
    }
  }
}
let p = new Password();
console.log(p.generatePassword(7));

/*OUTPUTS
Welcome to password generator 
q4.z7*b
*/