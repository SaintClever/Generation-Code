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

// Forloop strike method =================================================
// function strike() {
//   for (var i = 0; i < li.length; i++) { // change it to a let
//     li[i].onclick = function() { // change to this
//       if (li[i].className !== "strike") {
//         li[i].className = "strike"; // change to this
//       } else {
//         li[i].className = ""; // change to this
//       }
//     }
//   }
// }

// Advance strike method ==================================================
function strike() {
  if (event.target.tagName === "LI") {
    // console.log(event.target.tagName); // unhighlight this
    // console.log(event.target.classList); // unhighlight this
    event.target.classList.toggle("strike");
  }
}

// function calls =======================================
btn.addEventListener("click", function() {
  createTask();
});

ul.addEventListener("click", function() {
  strike();
});

// Forloop event handler
// ul.onmouseover = function() {
//   strike();
// }
