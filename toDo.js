// get references to HTML elements
const todoList = document.getElementById("todoList");
const addTodoButton = document.getElementById("addTodoButton");
const newTodoInput = document.getElementById("newTodoInput");

// array to hold todo items
let todos = [];

// function to render todos
function renderTodos() {
  // clear existing todo list
  todoList.innerHTML = "";

  // render each todo item as a list item
  todos.forEach((todo, index) => {
    const listItem = document.createElement("li");
    listItem.innerText = todo;
    listItem.addEventListener("click", () => {
      removeTodoItem(index);
    });
    todoList.appendChild(listItem);
  });
}

// function to add a new todo item
function addTodoItem() {
  const newTodo = newTodoInput.value;
  todos.push(newTodo);
  newTodoInput.value = "";
  renderTodos();
}

// function to remove a todo item
function removeTodoItem(index) {
  todos.splice(index, 1);
  renderTodos();
}

// add event listeners
addTodoButton.addEventListener("click", addTodoItem);

// initial render of todos
renderTodos();
