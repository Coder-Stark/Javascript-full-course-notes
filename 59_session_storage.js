//SESSION STORAGE AND RELATED STORAGE

//session store data for 1 session (single tab)

//in console
sessionStorage.setItem("name" , "shivam");
sessionStorage.getItem("name");
sessionStorage.removeItem("name");
sessionStorage.clear();


/*OUTPUTS
undefined
'shivam'
undefined
undefined
*/

window.onstorage = (e)=>{
  alert("changed");
  console.log(e);
}

//in console
// localStorage.setItem("Name" , "shivam");
/*OUTPUTS
StorageEvent {isTrusted: true, key: 'Name', oldValue: null, newValue: 'shivam', url: 'https://70.coder-stark.repl.co/', …}
*/
