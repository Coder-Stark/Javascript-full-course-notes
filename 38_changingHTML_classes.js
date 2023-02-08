//CHANGING HTML CLASSES 

/*HTML CODE

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div id = "first" class = 'yellow text-dark'>
    <span>
      Hey I am a good boy
    </span>
  </div>
  
  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script> 
</body>

</html>
*/

/*CSS CODE 
html, body {
  height: 100%;
  width: 100%;
}
.yellow{
  background-color : yellow;
  color : white;
}
.red{
  background-color : red;
  color : white;
}
.text-dark{
  color : black;
}
*/

let first = document.getElementById('first');

first.className = 'text-dark red' ;
console.log(first.classList);

first.classList.remove('red');
console.log(first.classList);

first.classList.add('yellow');
console.log(first.classList);

first.classList.toggle('red');
console.log(first.classList);

console.log(first.classList);

console.log(first.classList.contains('red'));


/*OUTPUTS

﻿
DOMTokenList(2) ['text-dark', 'red', value: 'text-dark red']

DOMTokenList ['text-dark', value: 'text-dark']

DOMTokenList(2) ['text-dark', 'yellow', value: 'text-dark yellow']

DOMTokenList(3) ['text-dark', 'yellow', 'red', value: 'text-dark yellow red']

DOMTokenList(3) ['text-dark', 'yellow', 'red', value: 'text-dark yellow red']

true
*/