//PRACTICE SET 9

/*
write a program to load a js file in a browser using promises.Use then()
to display an alert when th load is complete
*/
const loadScript = async(src)=>{
  return new Promise((resolve , reject)=>{
    let script = document.createElement('script');
    script.src = src;
    script.onload =()=>{
      resolve(src + ' Done Successfully');
    }
    document.head.append(script)
  })
}


// let a = loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js');
// a.then((value)=>{
//   console.log(value);
// })
  
// /*OUTPUTS
// https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js Done Successfully
//  */


// //write teh same program from previous question and use async/await syntax
// const loadScript2 = async(src)=>{
//   return new Promise((resolve , reject)=>{
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload =()=>{
//       resolve(src + ' Done Successfully');
//     }
//     document.head.append(script)
//   })
// }

// const main2 = async()=>{
//   console.log(new Date().getMilliseconds());
//   let a = await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js');
//   console.log(a);
//   console.log(new Date().getMilliseconds());
// }
// main2();
  
/*OUTPUTS
258
https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js Done Successfully
279
*/


//create a pomise which rejects after 3 sec use an async/await to get its value use
//a try catch to handle its error
let p =()=>{
  return new Promise((resolve , reject)=>{
  setTimeout(()=>{
    reject(new Error('please this is not acceptable'));
  },3000)
  })
}
let a = async()=>{
  try{
    let c = await p();
    console.log(c);
  }
  catch(err){
    console.log('This error has been handled');
  }
}
a();

/*OUTPUTS
This error has been handled
*/


//write a program using promise.all() inside on async/await to await 3 
//promises compare its results with the case where we await these promises one by one

let p1 = async ()=>{
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
      resolve(10);
    },2000)
  })
}
let p2 = async ()=>{
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
      resolve(20);
    },1000)
  })
}
let p3 = async ()=>{
  return new Promise((resolve , reject)=>{
    setTimeout(()=>{
      resolve(30);
    },3000)
  })
}

const run = async()=>{
  console.time('run');
  /*
  let a1 = await p1();  //fetch first 10 products from the database
  let a2 = await p2();  //fetch another 10 products from the database
  let a3 = await p3();  //fetch another 10 products from the database
  console.log(a1 , a2 , a3);
  */
  let a1 = p1();  //fetch first 10 products from the database
  let a2 = p2();  //fetch another 10 products from the database
  let a3 = p3();  //fetch another 10 products from the database

  let a1a2a3 = await Promise.all([a1 ,a2 , a3]);
  console.log(a1a2a3);
  console.timeEnd('run');
}
run();

/*OUTPUTS
// 10 20 30
// run: 6032.22412109375 ms

(3) [10, 20, 30]
run: 3006.795166015625 ms
*/