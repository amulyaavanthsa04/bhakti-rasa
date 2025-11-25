let button = document.getElementById("switch-mode");
let page = document.body;

// get the two text blocks
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");

// initialize: show text1, hide text2
if (text1 && text2) {
  text1.classList.remove('hidden');
  text2.classList.add('hidden');
}

button.addEventListener("click", function() {
    page.classList.toggle("switch-mode");

    // swap which text is visible
    if (text1 && text2) {
      text1.classList.toggle('hidden');
      text2.classList.toggle('hidden');
    }
});


let dropdown = document.getElementById("dropdown");
let img = document.getElementById("bg");

dropdown.addEventListener("change", function() {
    let userChoice = dropdown.value;
    img.src = userChoice;
});

// replace the single-element color handler with a handler that updates both text blocks
const colorInput = document.getElementById("color");
const textBlocks = document.querySelectorAll('.text'); // selects #text1 and #text2

if (colorInput) {
  colorInput.addEventListener('input', () => {
    const userColor = colorInput.value;
    textBlocks.forEach(el => el.style.color = userColor);
  });
}

// if you also have a text input field for live-editing content, use a distinct variable name
const textInput = document.getElementById('text'); // optional input element
if (textInput) {
  textInput.addEventListener('input', () => {
    const userText = textInput.value;
    // decide where to apply this; example: replace text1 content
    const t1 = document.getElementById('text1');
    if (t1) t1.innerHTML = userText;
  });
}

let downloadButton = document.getElementById("download");
downloadButton.addEventListener("click", function() {

    window.print();
});
