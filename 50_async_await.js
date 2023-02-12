//ASYNC AND AWAIT

// async function a(){
//   return 5;
// }
// a().then((value)=>{
//   console.log(value);
// })

async function b(){
  let delhiWeather = new Promise((resolve , reject)=>{
    setTimeout(()=>{
      resolve('27 Degree');
    },2000)
  })
  let bangloreWeather = new Promise((resolve , reject)=>{
    setTimeout(()=>{
      resolve('21 Degree');
    },5000)
  })

  // delhiWeather.then(alert);
  // bangloreWeather.then(alert);
  console.log('Fetching Delhi Weather Please wait ...');
  let delhiW = await delhiWeather;
  console.log('Fetched Delhi Weather : ' + delhiW);
  
  console.log('Fetching Banglore Weather Please wait ...');
  let bangaloreW = await bangloreWeather;
  console.log('Fetched Delhi Weather : ' + delhiW);
  return [delhiW,bangaloreW]
}
console.log('Welcome to weather condition ')

let x = b();
x.then((value)=>{
  console.log(value);
})


/*OUTPUTS
// 5

Welcome to weather condition 
Fetching Delhi Weather Please wait ...
Fetched Delhi Weather : 27 Degree

Fetching Banglore Weather Please wait ...
Fetched Delhi Weather : 27 Degree

(2) ['27 Degree', '21 Degree']
*/