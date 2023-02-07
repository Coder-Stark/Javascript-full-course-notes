//SNAKE , WATER AND GUN GAME

//use js to create a game of snake water and gun . The game should
//ask you to enter S , W or G . The computer should be able to 
//randomly generate S , W or G and declare win or loss using alert 
//use confirm and prompt wherever required
const prompt = require("prompt-sync")({ sigint : true});

let user = prompt('Enter S , W or G : ');
let cpuip = Math.floor(Math.random() * 3);
let cpu = ['S', 'W', 'G'][cpuip];

const match = (cpu, user) => {
  if (cpu === user) {
    return 'NOBODY';
  }
  else if (cpu === 'S' && user === 'W') {
    return 'CPU';
  }
  else if (cpu === 'S' && user === 'G') {
    return 'USER';
  }
  else if (cpu === 'G' && user === 'W') {
    return 'CPU';
  }
  else if (cpu === 'G' && user === 'S') {
    return 'USER';
  }
  else if (cpu === 'W' && user === 'G') {
    return 'CPU';
  }
  else if (cpu === 'W' && user === 'S') {
    return 'USER';
  }
}
let result = match(cpu, user);
console.log(`CPU:${cpu}\nUSER : ${user}\nThe winner is : ${result}`);


/*OUTPUTS
Enter S , W or G : G
CPU:S
USER : G
The winner is : USER
*/