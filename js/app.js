//capturing the input from the form field
//forms have a special event called 'submit' cn listen for a submit event
//create a variable tol hold a reference to the form element and the DOM
const form = document.getElementById('registrar');
//select te forms input element
const input = form.querySelector('input');
//add a submit event handler that logs the inputs value to the cosole.
form.addEventListener('submit', (e) =>{
  e.preventDefault();   ///call prevent default method to cancel the default behavior associated with an event
const text = input.value;  //store input value into a variable - inside hadnler-
                          ///add names to the UL. Li are children of UL so we need our handler to create a list item to hold the name.
//********  ADDING NAMES TO A UL *****************
const ul = document.getElementById('invited list'); //select ul with Id 'invited list'  inside handler
const li = document.createElement('li');    //create a list item element with creatElement method and store it in a variable named li
ul.appendChild(li);                       //use the appendChild method to place the list item inside the ul element
li.textContent = text;            //set the text content to the value of text with li
input.value = '';//clear out the input element after submitting a name- set input value to an empty string

//******* CREATING A CHECKBOX *************
//create a chekbox next to the list items to mark if a guest is coming -isside handler-
//list item should have text and a checkbox
      // const li =document.createElement('li');  //creates the list items to the ul
      // ul.appendChild(li);
      // li.textContent = text;
//already have this above//

const label = document.createElement('label');//create a label to associate with CHECKBOX
label.textContent = 'confirmed';   //set text to confirmed
const checkbox = document.createElement('input');  //create an input element and store it in a variable checkbox
checkbx.type = 'checkbox'; //sets input type to checkbox
label.appendChild('checkbox'); //appends checkbox to the label
li.appendChild = ('label');//appends the label to the list element

//*********** ADD A HANDLER TO THE CHECKBOX  ****************
//add a handler so when the checkbox is checked, it addds a class of 'responded' to the list item
//add event handler to add the new class





console.log(input.value);
});
