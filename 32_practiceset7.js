//PRACTICE SET 7


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
  <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact Us</li>
  </nav>

  <table>
    <td>Hello</td>
    <tr>1</tr>
    <tr>2</tr>
    <tr>3</tr>
    <tr>4</tr>
  </table>

  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script>
</body>

</html>
*/


// create a navbar and change the color of its first element to red 
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";


//create a table without tbody , now use "view page source" button to check whether it has a tbody or not
//ans = no


//create an element with 3 children now chnge the color of first and last element to green
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";


//write a js code to change background of all <li> tags to cyan
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = 'cyan';
})


//which of the following is used to look for the farthest ancestor that matches a given css selector
//a)matches   b)closest    c)contains   d)none of these

//ans = none of these
