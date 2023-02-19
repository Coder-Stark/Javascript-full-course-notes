//PRACTICE SET 10

//use a free api from the internet and feed your app with live data
/*HTML CODE
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Contests</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Contests</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-4">Programming Contests</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
        featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  </div>


  <div id = "cardContainer" class="row" style = "justify-content : cneter">
  </div>
  
  <script src="script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
    crossorigin="anonymous"></script>
  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>

</html>
 */

let url = "https://kontests.net/api/v1/all"
let response = fetch(url);
response.then((v)=>{
  return v.json();
}).then((contests)=>{
  console.log(contests);
  ihtml = "";
  for(item in contests){
    console.log(contests[item]);
    ihtml += `
    <div class="card mx-2 my-2" style="width: 20rem;">
      <img src="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-developer-picture-id1224500457?b=1&k=20&m=1224500457&s=612x612&w=0&h=oTvUxf6T0pKuQA5XRuePuTBxQTmB3BXWzpIl5u2iy44=" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${contests[item].name}</h5>
        <p class="card-text">Status is : ${contests[item].name} and site is ${contests[item].site}  </p>
        <p class="card-text">In 24 Hours  : ${contests[item].in_24_hours}</p>
        <p class="card-text">${contests[item].start_time}</p>
        <p class="card-text">${contests[item].end_time}</p>
        <a href="${contests[item].url} target= "_blank" class="btn btn-primary">Visit Page</a>
      </div>
    </div>
    `
  }
  cardContainer.innerHTML = ihtml;
})


//create a note saving app which stores your note to local storage and fetch the note which was saved
let n = localStorage.getItem('note');
alert("your note is " + n);
console.log("your note is " + n);

let a = prompt('Enter your note');
if(a){
  localStorage.setItem('note' , a);
}

/*OUTPUTS
your note is i am good
*/


//delete the node in previous question
let c = confirm("Do you want to delete your note?")
if(c){
  localStorage.removeItem('note');
  alert('Note deleted Successfully')
}
/*OUTPUTS
your note is null -> ok
Enter your note -> Shivam is good boy
Do you want to delete your note -> cancel
//refresh
your note is Shivam is good boy
Enter your note -> cancel
Do you want to delete your note -> ok
Note deleted Successfully
*/

