//PRACTICE SET 8

//write a program to show different alerts when different buttons are clicked
<body>
  <button onclick="alert('alert1')">alert1</button>
  <button onclick="alert('alert2')">alert2</button>
  <button onclick="alert('alert3')">alert3</button>
  <button onclick="alert('alert4')">alert4</button>

  <script src="script.js"></script>
  <script
    src="https://replit.com/public/js/replit-badge.js"
    theme="blue"
    defer
  ></script>
</body>;

//create a website which is capable of storing bookmarks of your favourite websites using href
/*
  <a href="https://google.com"><button>Google</button></a> 
  <a href="https://fb.com"><button>Facebook</button></a>
  <a href="https://twitter.com"><button>Twitter</button></a>
*/

//repeat question 2 using event listener
{
  /* <button id="google">Google</button> */
}

document.getElementById("google").addEventListener("click", () => {
  window.location = "https://google.com";
  win.focus();
});

//write a js program to keep fetching contents of a website(every 5sec)
const fetchContent = async (url) => {
  con = await fetch(url);
  let a = await con.json();
  return a;
};
setInterval(async function () {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  console.log(await fetchContent(url));
}, 5000);

/*OUTPUTS
  AFTER INTERVAL OF TIME IT WILL RUN 
  {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
*/

//create a glowing bulb effect using class list toggle method in js

{
  /* <div id ='bulb' class="bulb bulb-container" ></div> */
}

/*CSS CODE
.bulb{
  background: yellow;
}
.bulb-container{
  height: 340px;
  width: 340px;
}
 */

setInterval(async () => {
  document.querySelector("#bulb").classList.toggle("bulb");
}, 500);
