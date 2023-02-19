//EXERCISE 5

//write a js program to pretend to look like a hacker write an async funtion
//which will simply display the following output:
/*
Initialising hack program....
Hacking Ashish username...
username found ashish17... 
connecting to facebook.... 
try to use html and styling if possible
*/

/*HTML CODE
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>HackerMan</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div id = 'text'></div>
  
  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>

</html>
*/


/*CSS CODE
body{
  color : green;
  background: black;
  font-size: 25px;
} 
*/


let a = [
  "Initialising hack program...",
  "connecting to facebook... ",
  "Connecting to server 1...",
  "Connection failed Retrying...",
  "Connecting to server 2...",
  "Connected Successfully!!!",
  "Hacking Ashish username...",
  "Trying Brute Force",
  "200k Passwords Tried...",
  "Match not Found",
  "Another 200k Passwords tried...",
  "Match not Found",
  "Another 200k Passwords tried...",
  "Match Found",
  "Accessing Account",
  "username found ashish17... ",
  "Hack Successfully !!!!"
]

const sleep = async(seconds)=>{
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
      resolve(true);
    },seconds * 1000)
  })
}

const showHack = async(message)=>{
  await sleep(2);
  console.log(message);
  text.innerHTML = text.innerHTML + message + "<br>";
}

//IIFE(immediatly invoke function expression)
(async()=>{
  for(let i = 0 ; i < a.length ; i++){
    await showHack(a[i]);
  }
})();


/*OUTPUTS
Initialising hack program...
connecting to facebook...
Connecting to server 1...
Connection failed Retrying...
Connecting to server 2...
Connected Successfully!!!
Hacking Ashish username...
Trying Brute Force
200k Passwords Tried...
Match not Found
Another 200k Passwords tried...
Match not Found
Another 200k Passwords tried...
Match Found
Accessing Account
username found ashish17...
Hack Successfully !!!!
 */