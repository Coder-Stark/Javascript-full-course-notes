//HTML INSERTION METHODS 

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
  I am start of this container (outer)
  <div>
    I am start of this container (inner)
    <div id="first" >I am a first element</div>
    I am end of this container (inner)
  </div>
  I am end of this container (outer)

  
  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script> 
</body>

</html>
*/

let a = document.getElementsByTagName('div')[0];
// a.innerHTML = a.innerHTML + '<h1>Hello World </h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>hey guys </h1>';
a.appendChild(div);

a.append(div);                //inner container last element

a.prepend(div);               //inner container first element

a.before(div);                //outer then container first element

a.after(div);                 //outer then container last element

a.replaceWith(div);           //replace container to new div