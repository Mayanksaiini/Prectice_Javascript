// Select the heading of a page by ID and change its text to "Welcome to sheryians".

let Select = document.querySelector("#smashes");
Select.textContent = "Welcome to sheryians";

//Select all <li> elements and print their text using a loop.

// let list = document.querySelectorAll("li");
// list.forEach(function (val) {
//   console.log(val);
// });

// for (i = 0; i < list.length; i++) {
//   console.log(i);
// }

//Select a paragraph and replace its content with:

let para = document.querySelector("p");
para.textContent = "/*{<b>Updated</b> by js}*/";

//How do yuo get the src of an image using Javascript?

let image = document.querySelector("img");
console.log(image.getAttribute("src"));

//Select a link and update its href to point to https://sheryians.com.

let ancor = document.querySelector("a");
ancor.setAttribute("href", "https://sheryians.com");

//add a title  attribute to a div dynamically.
let div = document.querySelector("div");
div.setAttribute("title", "Hello langoors");
console.log(div);

//Create a new list item <li>New Tasks </li> and add it to the end of a <ul?
// create a new element with a placeholders source and  add it at teh top of a div
//Select the first item in a list and delete it from the DOM
//add a highlight  class to every even item in a list
//Set teh font size of all <p> elements to 18px using style.
