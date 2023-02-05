//ACCESSING PARENT AND SIBLINGS OF AN ELEMENT

/*HTML CODE

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body><div><div class="first">first</div><div class="second">second</div>
</div>
  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script> 
</body>

</html>
*/

console.log(document.body.firstChild);

a = document.body.firstChild;

console.log(a.parentNode);

console.log(a.parentElement);

console.log(document.documentElement.parentNode);

console.log(document.documentElement.parentElement);

console.log(a.firstChild.nextSibling);


/*OUTPUTS
div

body

body

#document

null

div.second
*/