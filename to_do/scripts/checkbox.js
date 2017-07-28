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

// Forloop for checkbox ===============================================
// function checkMate() {
//   for (let i = 0; i < checkbox.length; i++) { // change it to a let
//     checkbox[i].onchange = function() {
//       if (li[i].className !== "strike") {
//         console.log(checkbox[i]);
//         li[i].className = "strike";
//       } else {
//         li[i].className = "";
//       }
//     }
//   }
// }

// function calls =======================================
btn.addEventListener("click", function() {
  createTask();
});

// Forloop checkMate method
// ul.addEventListener("mouseover", function() {
//   checkMate();
// });
