//ELEMENT ONLY NAVIGATION

/*HTML CODE

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>PortFolio Website</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body><!--This is comment node-->
  <nav>
    <ul>
      <li>Home</li>
      <li>About Me</li>
      <li>Hire Me</li>
    </ul>
  </nav>
  <div class="container">
    <p>Hey I am a good boy</p>
  </div>

*/
/*CSS CODE
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
ul{
  display: flex;
  margin: 0;
  padding: 20px;
}
li{
  list-style: none;
  margin: 0 25px;
}
*/

const changeBgColor = () => {
    document.body.firstElementChild.style.background = "red";
};
changeBgColor();

let b = document.body;
console.log("first child of b is : ", b.firstChild);

console.log("fist element child of b is : ", b.firstElementChild);
  

/*OUTPUTS
first child of b is :  #comment

fist element child of b is :  nav
*/