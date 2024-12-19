const mainTodoElem = document.querySelector(".todo-list-elem");
const inputValue = document.getElementById("inputValue");

const getTodoListFromLocal = () => {
  return JSON.parse(localStorage.getItem("myTodoList"));
};

const addTodoListLocalStorage = (localTodoLists) => {
  localStorage.setItem("myTodoList", JSON.stringify(localTodoLists));
};

let localTodoLists = getTodoListFromLocal() || [];

const addTodoDynamicElement = (curElem) => {
  const divElement = document.createElement("div");
  divElement.classList.add("main_todo_div");
  divElement.innerHTML = `<li>${curElem}</li><button class="deleteBtn">Delete</button>`;
  mainTodoElem.append(divElement);
};

const addTodoList = (e) => {
  e.preventDefault();
  const todoListValue = inputValue.value.trim();

  inputValue.value = "";

  if (todoListValue !== "" && !localTodoLists.includes(todoListValue)) {
    localTodoLists.push(todoListValue);
    localTodoLists = [...new Set(localTodoLists)];
    localStorage.setItem("myTodoList", JSON.stringify(localTodoLists));

    addTodoDynamicElement(todoListValue);
  }
};

const showTodoList = () => {
  localTodoLists.forEach((curElem) => {
    addTodoDynamicElement(curElem);
  });
};

showTodoList();

const removeTodoElem = (e) => {
  const todoToRemove = e.target; // Button
  const parentElement = todoToRemove.parentElement; // Parent div
  const todoListContent = parentElement.querySelector("li").innerText; // List item content

  // Filter the todo list
  localTodoLists = localTodoLists.filter((curTodo) => {
    return curTodo.toLowerCase() !== todoListContent.toLowerCase();
  });

  // Update localStorage and remove the element from DOM
  addTodoListLocalStorage(localTodoLists);
  parentElement.remove();
};

mainTodoElem.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("deleteBtn")) {
    removeTodoElem(e);
  }
});

document.querySelector(".btn").addEventListener("click", (e) => {
  addTodoList(e);
});
