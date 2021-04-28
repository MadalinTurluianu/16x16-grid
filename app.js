const main = document.querySelector("main");

divList = [];

for (i = 0; i < 16 * 16; i++) {
  divList[i] = document.createElement("div");
  main.appendChild(divList[i]);
}

// for (i = 0; i < 16 * 16; i++) {
//     let n =i;
//     divList[i].addEventListener("mouseover", function(n){
//         divList[n].style.background = "rgb(0, 253, 211)";
//         console.log("hi");
//     }(n))
// }