const inputTodo = document.getElementById("addinput");

const buttonTodo = document.querySelector(".button");
const listTodo = document.querySelector(".list");
const title = document.querySelector("#title");

function isEmpty() {
    if (listTodo.children.length === 0) {
        title.innerHTML = "OOPS YOU HAVEN'T ADDED ANY TODO'S";
    } else
        title.innerHTML = "ALL YOUR TODO'S HERE";
}
isEmpty();

buttonTodo.addEventListener("click", addTodo);



function addTodo(events) {
    events.preventDefault();
    if (inputTodo.value != "") {
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
        btn.addEventListener("click", deleteTodo);
        inputTodo.value = "";
        input.addEventListener("change", complited);
        isEmpty();

    }
}

function deleteTodo(event) {
    const item = event.target;
    const todo = item.parentElement.parentElement.parentElement;
    todo.remove();
    isEmpty();
}

function complited(event) {
    const item = event.target.parentElement.children[1];
    item.classList.toggle("completed");
}