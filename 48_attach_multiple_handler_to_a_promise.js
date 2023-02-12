//ATTACHING MULTIPLE HANDLERS TO A PROMISE

let p1 = new Promise((resolve , reject)=>{
  console.log('Hey i am not resolved ');
  setTimeout(()=>{
    resolve(1);
  },2000)
})

//all handler run independently
p1.then(()=>{
  console.log('The promise is resolved')
})
p1.then(()=>{
  console.log('Hurry')
})


/*OUTPUTS
Hey i am not resolved 

//AFTER 2 SEC
The promise is resolved
Hurry
*/