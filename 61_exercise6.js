//EXERCISE 6

//create a ToDo list app capable of storing your ToDos in localStorage . 
//add an option to create , delete and access on the ToDos
//try to make UI as good as possible

/*HTML CODE
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>ToDo-List</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

</head>

<body>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ToDo-List</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="container">
    <form>
      <div class="mb-3">
        <label for="title" class="form-label">ToDo Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for='desc'>Todo Description</label>
        <input type="text" class="form-control" id="desc">
      </div>
      <button id="submit" type="submit" class="btn btn-primary">Submit</button>
      <button id="deleteBtn" class="btn btn-danger">Delete</button>
    </form>
    <div id="ToDo">
      
    </div>
  </div>

  <script src="script.js"></script>
  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
    crossorigin="anonymous"></script>

</body>

</html>
*/

submit.addEventListener('click' , (e)=>{
  e.preventDefault();
  let titlec = title.value;
  let descc =  desc.value;
  localStorage.setItem('ToDo' , JSON.stringify([titlec , descc]))
  console.log(e);
  ToDo.innerHTML = `
  <h1> ${titlec} </h1>
  <p> ${descc} </p>
  `
  title.value = "";
  descc.value = "";
})

deleteBtn.addEventListener('click' , (e)=>{
  e.preventDefault();
  localStorage.removeItem('ToDo');
  ToDo.innerHTML = "";
})