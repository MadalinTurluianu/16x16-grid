const main = document.querySelector("main");
const div = document.createElement("div");

// -------------------------------------------------------- CREATE THE START GRID

let divNumber = 16;

function createGrid() {
  main.style.gridTemplateColumns = `repeat(${divNumber}, 1fr)`;
  main.style.gridTemplateRows = `repeat(${divNumber}, 1fr)`;

  for (i = 0; i < divNumber ** 2; i++) {
    main.appendChild(div.cloneNode());
  }
}

createGrid();

// -------------------------------------------------------- MAKING THE DIVS TO CHANGE COLOR

let divList = document.querySelectorAll("div"); // We have to define divList after createGrid()

function changeColor(element) {
  element.addEventListener("mouseover", function () {
    let color1 = (Math.random() * 255).toFixed(0);
    let color2 = (Math.random() * 255).toFixed(0);
    let color3 = (Math.random() * 255).toFixed(0);
    this.style.background = `rgb(${color1},${color2},${color3})`;
  });
}

divList.forEach(changeColor);

// -------------------------------------------------------- RESET BTN FUNCTIONALITY

const resetBtn = document.querySelector(".reset");

function resetColor(element){
  element.style.background = "white";
}

resetBtn.addEventListener("click", function () {
  divList.forEach(resetColor);

  userInput = parseInt(prompt("How many squares for side do you want? ( max 100 )"));
  while (!userInput || userInput > 100 || userInput < 0){
    userInput = parseInt(prompt("How many squares for side do you want? ( max 100 )"));
  }
  divNumber = userInput;
  createGrid();
  divList = document.querySelectorAll("div");
  divList.forEach(changeColor);
});
