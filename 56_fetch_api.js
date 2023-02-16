//FETCH API

let p = fetch("https://goweather.herokuapp.com/weather/NY");
p.then((response)=>{
  console.log(response.status);
  console.log(response.ok);
  return response.json()
}).then((value2)=>{
  console.log(value2);
})


/*OUTPUTS
200
true
{temperature: '+11 °C', wind: '15 km/h', description: 'Clear', forecast: Array(3)}
*/


//SENDING POST REQUEST WITH FETCH API
/*
let options = {
  method : 'POST',
  headers :{
    "Content-type" : "application/json"
  },
  body: JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1,
  }),
}
fetch('https://jsonplaceholder.typicode.com/posts', options)
.then((response) => response.json())
.then((json) => console.log(json));
*/

/*OUTPUTS
{title: 'foo', body: 'bar', userId: 1, id: 101}
*/

/*
const createToDo = async()=>{
  let options = {
    method : 'POST',
    headers :{
      "Content-type" : "application/json"
    },
    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
    }),
  }
  let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
  let response = await p.json();
  return response;
}
const mainFunc = async()=>{
  let todo = await createToDo();
  console.log(todo);
}
mainFunc();
*/

/*OUTPUTS
{title: 'foo', body: 'bar', userId: 1, id: 101}
*/


const createToDo = async(todo)=>{
  let options = {
    method : 'POST',
    headers :{
      "Content-type" : "application/json"
    },
    body: JSON.stringify(todo),
  }
  let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
  let response = await p.json();
  return response;
}

const getTodo = async (id)=>{
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  let r = await response.json();
  return r;
}

const mainFunc = async()=>{
  let todo = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }
  let todor = await createToDo(todo);
  console.log(todor);
  console.log(await getTodo(5));
}
mainFunc();

/*OUTPUTS
{title: 'foo', body: 'bar', userId: 1, id: 101}

{userId: 1, id: 5, title: 'nesciunt quas odio', body: 'repudiandae veniam quaerat sunt sed\nalias aut fugi…sse voluptatibus quis\nest aut tenetur dolor neque'}
*/