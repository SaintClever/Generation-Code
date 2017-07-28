// varariables ==========================================
var input = document.getElementById("input");
var ul = document.getElementById("ul");
var btn = document.getElementById("btn");
var li = document.getElementsByTagName("li");
var checkbox = document.getElementsByClassName("checkbox");

// functions ============================================
function createTask() { // create a param called li and remove the var below
  if (input.value !== "") {
    var label = document.createElement("label");
    var li = document.createElement("li");
    var checkbox = document.createElement("input");

    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "checkbox";
    label.appendChild(checkbox);

    li.innerHTML = input.value;
    label.appendChild(li);
    ul.appendChild(label);

    input.className = "";
    input.setAttribute("placeholder", "Add another task");
    input.value = "";
    input.focus();
  } else {
    input.setAttribute("placeholder", "Input task please");
    input.className = "error";
    input.focus();
  }
}


// function calls =======================================


btn.onclick = createTask;
