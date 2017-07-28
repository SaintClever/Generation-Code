// varariables ==========================================
var input = document.getElementById("input");
var ul = document.getElementById("ul");
var btn = document.getElementById("btn");
var li = document.getElementsByTagName("li");

// functions ============================================
function createTask() { // create a param called li and remove the var below
  if (input.value !== "") {
    var li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);

    input.className = "normalize";
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
btn.onclick = function() {
  createTask();
}
