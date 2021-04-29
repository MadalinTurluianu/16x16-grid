const main = document.querySelector("main");
const div = document.createElement("div");
let divList;
let divNumber = 16;

function createGrid() {
  main.style.gridTemplateColumns = `repeat(${divNumber}, 1fr)`;
  main.style.gridTemplateRows = `repeat(${divNumber}, 1fr)`;

  for (i = 0; i < divNumber ** 2; i++) {
    main.appendChild(div.cloneNode());
  }
}

createGrid();

divList = document.querySelectorAll("div");

function changeColor(element){
  element.addEventListener("mouseover", function(){
    let color1 = (Math.random() * 255).toFixed(0);
    let color2 = (Math.random() * 255).toFixed(0);
    let color3 = (Math.random() * 255).toFixed(0);
    this.style.background = `rgb(${color1},${color2},${color3})`;
  })
}

divList.forEach(changeColor);