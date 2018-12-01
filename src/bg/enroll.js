// enroll.js - automatically "waitlists if full" all classes in user's cart and clicks enroll
// based on code by Sam Lijin that can be found at:
// https://github.com/sxlijin/assorted-code-snippets/blob/master/random-vandy-stuff/vandyClassRegistration.js

// grab the user's classes
const cart = document.getElementById('StudentCartList_div');
const classes = cart.getElementsByClassName('classTable');

for (let i = 0; i < classes.length; i++) {
  // find the current class
  const classInfo = classes[i].getElementsByClassName('left')[0].childNodes;
  const className = `${classInfo[1].innerText} ${classInfo[3].innerText}`;
  const classSelection = classes[i].getElementsByClassName('classSelection')[0];

  // grab the children of the current class
  const sub = classSelection.childNodes;
  try {
    // children [1] and [3] are inputs to enroll and/or waitList in the class; [5] is the 3rd parent of the ▼
    // dropdown text.
    // Clicking E▼ removes the "disabled" attribute from both, but does NOT toggle the waitListHidden input true.
    // Clicking W▼ does the same, but DOES toggle the waitListHidden input true.
    // By doing both, we enroll but also waitlist if the class if full.
    sub[1].removeAttribute('disabled');
    sub[3].removeAttribute('disabled');
    sub[3].value = 'true';

    // This accesses and modifies the dropdown text. While not necessary for this script to be
    // functional, that its it serves as
    // visual confirmation that the function has executed properly.
    const buttonText = sub[5].firstChild.firstChild.firstChild;
    buttonText.textContent = 'W▼';
  } catch (TypeError) {
    console.log(`Error during ${i}-th iteration:`);
    console.log(TypeError);
  }
}

// click the enroll button
document.getElementById('enrollButton-button').click();
