//EXERCISE 4

/*
create a Digital seconds clock using setInterval and Date object in js.The Date object
can be used to get the data time , hours and seconds which can be updated using setinterval
trt to keep ui good
 
*/

/*hint
let a = new Date();
let d = a.getDate();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();

setInterval(async ()=>{
    console.log(d , h  , m , s);
},1000);
*/

/*HTML CODE 
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

</head>

<body>
  <div class="contaner text-center fs-1 text">

    <div class="badge bg-primary text-wrap text-center" id='time'></div>
  </div>


  <script src="script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
    crossorigin="anonymous"></script>


  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script>
</body>

</html>
*/

setInterval(() => {
  let d = new Date();
  time.innerHTML = d;
}, 1000);
