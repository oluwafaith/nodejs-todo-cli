const { readFileSync, writeFileSync } = require("fs");

function getAllTodos() {
  const data = readFileSync("todo.json");
  const result = JSON.parse(data);

  result.map((item) => {
    if (item.completed == true) {
      console.log(`(${item.id}*)`, item.title);
    } else {
      console.log(`(${item.id})`, item.title);
    }
  });
}

function createTodo(title) {
  const readTodo = readFileSync("todo.json");
  let todos = JSON.parse(readTodo);
  let leng = todos.length + 1;

  todos.push({
    id: leng,
    completed: false,
    title: title,
  });

  let parsedData = JSON.stringify(todos);
  writeFileSync("todo.json", parsedData);

  console.log("new data added");
}

function deleteTodo(title) {
  const readTodo = readFileSync("todo.json");
  let todos = JSON.parse(readTodo);

  const filtered = todos.filter((item) => {
    return item.id != title;
  });

  todos = JSON.stringify(filtered);

  writeFileSync("todo.json", todos);

  if (filtered.length != todos.length) {
    console.log("deleted");
  } else {
    console.log("title does not exist");
  }
}
function updateTodo(title) {
  const readTodo = readFileSync("todo.json");
  let parsedData = readTodo.toString();
  let todos = JSON.parse(parsedData);

  for (const item of todos) {
    if (item.id == title) {
      item.completed = true;
      break;
    }
  }

  todos = JSON.stringify(todos);

  writeFileSync("todo.json", todos);

  console.log("completed");
}

module.exports = { getAllTodos, createTodo, deleteTodo, updateTodo };
