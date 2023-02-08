//INNER-HTML , OUTER-HTML AND OTHER PROPERTIES

/*HTML CODE

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Inner HTML</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  Hello world
  <span id="first" >I am span</span>

  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script> 
</body>

</html>
*/

//innerhtml is valid for element nodes only
console.log(document.getElementsByTagName('span')[0]);
console.dir(document.getElementsByTagName('span')[0]);

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

console.log(first.innerHTML);
console.log(first.innerHTML = "<i>hey i am italic</i>");

//outerhtml
console.log(first.outerHTML);
console.log(first.outerHTML = "<div>hey</div>");


console.log(document.body.firstChild);
console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);

console.log(document.body.textContent);

//$0.hidden = false ---> shows hidden content
//first.hidden = false ---> shows hidden content


/*OUTPUTS
<span>I am span</span>
span#first (as a object)

#text
SPAN

I am span
<i>hey i am italic</i>

<span id="first"><i>hey i am italic</i></span>
<div>hey</div>

"Hello world"
Hello world
Hello world

Hello world
hey

*/