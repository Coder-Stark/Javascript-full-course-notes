//DOM(document object model) , BOM(browser object model) & WINDOW OBJECTS

// window is a global object which access html,css and js all
console.log(window);
window.alert("hi");

// Dom -> represents the page content as html
console.log(document.body);           //page body as js object  

//document.body.style.background = 'green' -> changes bg color 
document.body.style.background = 'red'

//Bom -> represents additional objects provide by the browser
alert("shivam");
location.href = "https://google.com";


/*OUTPUTS
windows all objects appear 
hi                                (popup)

body as objects appear

shivam                             (popup)

redirect to google home page
*/

