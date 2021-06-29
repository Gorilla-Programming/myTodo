const inputTodo = document.getElementById("addinput");

const buttonTodo = document.querySelector(".button");
const listTodo = document.querySelector(".list");

buttonTodo.addEventListener("click", addTodo);
listTodo.addEventListener("click", deleteTodo);

function addTodo(events) {
    events.preventDefault();
    const list = document.createElement("li")
    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("checkboxinput")
    const label = document.createElement("label");
    label.appendChild(document.createTextNode(inputTodo.value));
    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("button")
    const span = document.createElement("span");
    span.classList.add("button__icon");
    const icon = document.createElement("ion-icon");
    icon.name = "trash-outline";
    span.appendChild(icon);
    btn.appendChild(span);
    list.appendChild(input);
    list.appendChild(label);
    list.appendChild(btn);
    listTodo.appendChild(list);
    inputTodo.value = "";
}

function deleteTodo(event) {
    const item = event.target;
    if (item.classList[0] === "md") {
        const todo = item.parentElement.parentElement.parentElement;
        todo.remove();
    }
}