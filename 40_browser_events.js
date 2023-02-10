//INTRODUCTION TO BROWSER EVENTS

/*HTML CODE

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Events</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>

  <div class="container" onmouseenter="console.log('mouse in the container')">
    <button onclick="alert('hello') ; let a = 6 ; console.log(a)">Click me</button>
  </div>
  
  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script>
</body>

</html> 
*/

let a = document.getElementsByClassName('container')[0];

a.onclick = () => {
  let b = document.getElementsByClassName('container')[0]
  b.innerHTML = 'hello world';
}


/*OUTPUTS
mouse in the container
6

mouse in the container*/ 