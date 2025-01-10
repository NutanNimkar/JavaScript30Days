// var form = document.getElementById("addForm");
// var itemList = document.getElementById("items");
// var filter = document.getElementById("filter");

// //form submit event
// form.addEventListener("submit", addItem);
// //delete event
// itemList.addEventListener("click", removeItem);
// //filter event
// filter.addEventListener("keyup", filterItems);

// //Add item
// function addItem(e) {
//   e.preventDefault();

//   //Get input value
//   var newItem = document.getElementById("item").value;
//   //Create new li element
//   var li = document.createElement("li");
//   //add Class
//   li.className = "list-group-item";
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   //crate delete button element
//   var deleteButton = document.createElement("button");
//   // add classes to delete button
//   deleteButton.className = "btn btn-danger btn-sm float-right delete";
//   // append text node
//   deleteButton.appendChild(document.createTextNode("X"));
//   //append button to li
//   li.appendChild(deleteButton);
//   //append li to list
//   itemList.appendChild(li);
// }

// //Remove item
// function removeItem(e) {
//   if (e.target.classList.contains("delete")) {
//     if (confirm("Are you sure?")) {
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// //filter Event
// function filterItems(e) {
//   //convert to lowercase
//   var text = e.target.value.toLowerCase();
//   //get lis
//   var items = itemList.getElementsByTagName("li");
//   //conver to an array
//   Array.from(items).forEach(item => {
//     var itemName = item.firstChild.textContent;
//     if (itemName.toLowerCase().indexOf(text) != -1) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// }


var itemList = document.querySelector('#items');

//parent node
// console.log(itemList.parentNode);
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode);

// console.log(itemList.children);
// console.log(itemList.children[1]);
var form = document.getElementById('addForm');
var itemLists = document.getElementById('items');

form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item');
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem.value));
    var deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.innerHTML= 'X';
    li.appendChild(deleteButton);
    itemLists.appendChild(li);
}

form = document.getElementById('form');
passWordBox = document.getElementById('password');
nameBox = document.getElementById('name');
passWordBox.placeholder = 'Type your password';
nameBox.placeholder = 'Name';
error = document.getElementById('error');
console.log(error);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (nameBox.value === '' || nameBox.valu === null){
        error.innerHTML = 'Please enter your name';
    }
    if (passWordBox.value === '' || passWordBox.valu === null){
        error.innerHTML = 'Please enter your password';
    }
    if(nameBox.value.length >= 20 || nameBox.value.length <= 6){
        error.textContent =' Name must be between 6 and 20 characters';
    }
    if(passWordBox.value.length >= 20 || passWordBox.value.length <= 6){
        error.textContent = 'Password must be between 6 and 20 characters';
    }
    if(passWordBox.value !== nameBox.value || passWordBox.value === 'password'){
        newText = document.createTextNode('Passwords do not match');
        error.appendChild(newText);
    }
})