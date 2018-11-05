//gets all class elements
let buttons = document.getElementsByClassName("event eventEnrolled");

//creates three new buttons and adds to bottom
let newBut = document.createElement("BUTTON");
let newText = document.createTextNode("drop this");
newBut.appendChild(newText);
document.body.appendChild(newBut);

let newBut2 = document.createElement("BUTTON");
let newText2 = document.createTextNode("-");
newBut2.appendChild(newText2);
document.body.appendChild(newBut2);

let newBut3 = document.createElement("BUTTON");
let newText3 = document.createTextNode("-");
newBut3.appendChild(newText3);
document.body.appendChild(newBut3);


