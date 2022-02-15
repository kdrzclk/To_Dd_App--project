const form = document.querySelector("form");
const input = document.querySelector("#task-name");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let items;

// call event listeners
eventListeners();

function eventListeners() {
  // submit event
  form.addEventListener("submit", addNewItem);

  // delete
  taskList.addEventListener("click", deleteItem);

  // delete all
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

function addNewItem(e) {
  if (input.value == "") {
    alert("Please add new task.");
    return;
  } // kullanıcı boş değer girerse uyarı verdirmek için

  //create li
  const li = document.createElement("li");
  li.className = "list-group-item";
  let text = document.createTextNode(input.value);
  li.appendChild(text);

  //create a
  const a = document.createElement("a");
  a.className = "delete-item";
  a.setAttribute("href", "#");
  a.innerHTML = "<i class='fas fa-times'></i>";

  // add a to li
  li.appendChild(a);

  // add li to ul
  taskList.appendChild(li);

  // clear input
  input.value = "";

  e.preventDefault(); // formun ilk başta submit olmasını kapattık
}

// delete an Item

function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }

  e.preventDefault();
}

// delete all items

function deleteAllItems(e) {
  if (confirm("Are you sure?")) {
    taskList.innerHTML = "";
  }

  e.preventDefault();
}

function loadItems() {
  items = getItemsFromLS();
}

function getItemsFromLS() {
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  return items;
}
