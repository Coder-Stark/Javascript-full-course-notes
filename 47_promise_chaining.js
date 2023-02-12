//PROMISE CHAINING

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Resolved after 2 sec ');
    resolve(56);
  }, 2000)
})
p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise 2');
    }, 2000)
  })
  return p2;
}).then((value) => {
  console.log('We are done ');
  return 2;
}).then((value) => {
  console.log('Now all done');                      //immediatly done
})


/*OUTPUTS
Resolved after 2 sec 
56
We are done 
Now all done
*/

//LOADSCRIPT FUNCTION USING PROMISE(44.js)
const loadScript = (src)=>{
  return new Promise((resolve , reject)=>{
    let script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    script.onload=()=>{
      resolve('Script has been loaded successfully ');
    }
    script.onerror=()=>{
      reject(0);
    }
  })
}
let p = loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js');
p.then((value)=>{
  console.log(value);
  return loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js');
}).then((value)=>{
  console.log('second script ready')
}).catch((error)=>{
  console.log('Error on loading Script');
})
  
  
/*OUTPUTS
Script has been loaded successfully 
second script ready
*/

