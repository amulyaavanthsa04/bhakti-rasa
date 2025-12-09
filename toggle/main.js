let button = document.getElementById("swap-button");
let container = document.getElementById("container");
let page = document.body;

if (button) {
  button.addEventListener("click", function () {
    if (container) container.classList.toggle("flipped");
    page.classList.toggle("flipped"); // also toggle a class on <body> so CSS can change the background
  });
}

