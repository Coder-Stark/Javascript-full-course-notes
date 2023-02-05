//ACCESSING CHILDREN OF AN ELEMENT

/*HTML CODE

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body><div>
    <p>this is me </p>
    <span>Sibling</span>
  </div>
  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script>
</body>

</html>
 */


console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

// elem.childNodes[0] === elem.firstChild
// elem.childNodes[elem.childNodes.length - 1] === elem.lastChild

// To actually form an array (childNodes looks like array but actualy they are not array)
let arr = Array.from(document.body.childNodes);
console.log(arr);



/*OUTPUTS
//#text                      if div down to body
//div                        if div beside to body

div
script
NodeList(3) [div, text, script]

(3) [div, text, script]
*/

