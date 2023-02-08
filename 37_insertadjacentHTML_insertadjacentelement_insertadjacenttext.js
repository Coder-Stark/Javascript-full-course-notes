//INSERTADJACENT-HTML , INSERTADJACENT-ELEMENT AND INSERTADJACENT-TEXT

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
  <div id = "first">Hey I am first</div>
  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script> 
</body>

</html>
*/

let first = document.getElementById("first");

first.insertAdjacentHTML('beforebegin' , '<div class = "text">beforebegin</div>');
first.insertAdjacentHTML('beforeend' , '<div class = "text">beforeend</div>');
first.insertAdjacentHTML('afterbegin' , '<div class = "text">afterbegin</div>');
first.insertAdjacentHTML('afterend' , '<div class = "text">afterend</div>');


first.remove()              

/*
insert HTML immediately before element
insert HTML into element at the end.
insert HTML into element at the beginning.
insert HTML immediately agfter element

to remove first
*/