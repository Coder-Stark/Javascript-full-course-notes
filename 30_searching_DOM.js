//SEARCHING THE DOM

/*HTML CODE
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Nature</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

</head>

<body>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nature</a>
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
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" name = "search" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="container row m-auto justify-content-center">
    <div class="card mx-3" style="width: 18rem;">
      <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 id="firstcard" class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
        <a href="#" class="btn btn-primary this">Go somewhere</a>
      </div>
    </div>
    <div class="card mx-3" style="width: 18rem;">
      <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 id="firstcard" class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card mx-3" style="width: 18rem;">
      <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 id="firstcard" class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>


  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
    crossorigin="anonymous"></script>

</body>

</html>
*/

//CHANGE THE CARD TITLE TO RED
let ctitle = document.getElementsByClassName("card-title")[0];
ctitle.style.color = "red";

let ctitle1 = document.getElementById("firstcard");
ctitle1.style.color = "blue";

let ctitle2 = document.querySelectorAll(".card-title");
ctitle2[0].style.color = "blue";
ctitle2[1].style.color = "red";
ctitle2[2].style.color = "green";

document.querySelector(".this").style.color = "white";
document.querySelector(".this").style.background = "black";

console.log(document.getElementsByTagName("a"));
console.log(document.body.getElementsByTagName("a"));

console.log(document.querySelector(".card").getElementsByTagName("a"));

console.log(document.getElementsByName("search"));


/*OUTPUTS
HTMLCollection(10) [a.navbar-brand, a.nav-link.active, a.nav-link, a.nav-link.dropdown-toggle, a.dropdown-item, a.dropdown-item, a.dropdown-item, a.btn.btn-primary.this, a.btn.btn-primary, a.btn.btn-primary]

HTMLCollection(10) [a.navbar-brand, a.nav-link.active, a.nav-link, a.nav-link.dropdown-toggle, a.dropdown-item, a.dropdown-item, a.dropdown-item, a.btn.btn-primary.this, a.btn.btn-primary, a.btn.btn-primary]

HTMLCollection [a.btn.btn-primary.this]0: a.btn.btn-primary.thislength: 1[[Prototype]]: HTMLCollection

NodeList [input.form-control.me-2]
*/