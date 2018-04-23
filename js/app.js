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
//to add an event listener to any new list item, use event bubbling and add the handler to one element, the i; tag holding the list items and checkboxes.
//use the change event with checkboxes to see when a checkbox has changed from checked to unchecked or unchecked to checked.
//call addEventListener on the ul element - select it first// we alreay used const u; in prevous handler so it needs to be outside the cunction as a gloabl function to use in more place
//put const ul = document.getElementById('invitedList'); outside at the top as a global function.
// ******* BUILDING A CHANGE EVENT HANDLER ****************
ul.addEventListener('change' (e) => {
  const checkbox = event.target;          // get a reference to the checkbox
  //once we have the value of the checkbox, which is true if box is checked, or false if it is not checked, will be stroed in a variable anmed checked.
  const checked = checkbox.checked;
  //since we will change the class of the list item, when the box is checked, we need a reference to the list item.
  // li is the checkbox grandparent
  //label is the child of list itemcheckbox is the child of label
  //traverse the DOM by calling the parentNode 2x to get to grandparent
  //parentNode goes once to label element
  //parentNode parentNode goes to list item
  const list item = checkbox.parentNode.parentNode;
  //set the class name of the list item to responded if checked is true, or remove the class is checked is false** conditional statement ***
  if (checked){
    listItem.className = 'responded';
  } else {
    listItem.className = '';
  }

  /// **** we just added a delegated handler that marks off when they responded *****////

  // ***  REMOVING NAMES ***********
  //provide a way to remove names from a list
  //add a remove button to each list item, so clicking the button deleltes the names
  // add the remove button as a child to each list ite, right below the label and checkbox we added.
  //can copy the code we used to create, append and edit checkbox
            // const checkbox =document.createElement('checkbox');
            // checkbox.type = 'Checkbox';
            // label.appendChild(checkbox);
//paste below it where we append label to li and change to..
const button = document.createElement('button');
button.textContent = 'remove';
li.appendChild(button);  //appends button to the list items



})




console.log(input.value);
});
