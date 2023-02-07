//MATCHES , CLOSEST AND CONTAINS

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
  <div class="box" id = "id1">This is id 1<span id = "sp1">Span1</span></div>
  <div class="box" id = "id2">This is id 2</div>

  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script> 
</body>

</html>
*/

let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1);
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));

console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));

console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));


/*OUTPUTS
div#id1.box
false
true

div#id1.box
span#sp1

true
true
false
*/