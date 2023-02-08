//HTML ATTRIBUTES AND THEIR METHODS

/*HTML CODE 

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Attribute Methods</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div id= "first" class= "hey" data-game = "mario" data-player="shivam" >
    Hey i am first container
  </div>
  
  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script> 
</body>

</html>
*/

//to get the attribute
let first = document.getElementById("first");
console.log(first.getAttribute("class"));

//to check attribute is their or not
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

// first.setAttribute("hidden","true");
first.setAttribute("class","true sachin");
// first.removeAttribute("class","true sachin");

console.log((first.attributes));

console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);


/*OUTPUTS
hey

true
false

NamedNodeMap {0: id, 1: class, 2: data-game, 3: data-player, id: id, class: class, data-game: data-game, data-player: data-player, length: 4}

DOMStringMap {game: 'mario', player: 'shivam'}
mario
shivam
*/