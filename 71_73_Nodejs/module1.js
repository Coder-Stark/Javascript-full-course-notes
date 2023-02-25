//COMMON JS MODULES

const hello = ()=>{
    console.log("Hello Shivam");
}

const ahello = (name)=>{
    console.log("Hello " + name);
}

// module.exports = hello;
module.exports = {hello , ahello};
// module.exports = {hello : hello , ahello : ahello};        //work same as above