import { arrTestLigne, alphabet } from "./modules/array.js";

let zoneLigne = document.getElementById("lignetest");

let sideRL = "";
let sideUB = "";
let arrsideRL = [];
let arrsideUB = [];

function generateSide() {
  let sidea = "";
  let sideb = "";
  let arrsidea = [];
  let arrsideb = [];
  for (let i = 0; i < arrTestLigne.length; i++) {
    sidea += `<div class="letter" >${alphabet[i]}</div>`;
    sideb += `<div class="numbers" >${i}</div>`;
    arrsideRL.push(alphabet[i]);
    arrsideUB.push(i);
  }
  sideRL = `<div class="numbersContainer" >${sideb}</div>`;
  sideUB = `<div class="letterContainer" ><div class="blanka"></div>${sidea}<div class="blanka"></div></div>`;
}

function generateLignein(j) {
  let data = "";

  for (let i = 0; i < arrTestLigne[j].length; i++) {
    if (arrTestLigne[j][i] === "board") {
      data += `<div class="board" id="board${arrsideRL[j]}${arrsideUB[i]}"></div>`;
    } else if (arrTestLigne[j][i] === "corner") {
      data += `<div class="corner" id="board${arrsideRL[j]}${arrsideUB[i]}"></div>`;
    }
  }

  data = `<div class="container">${data}</div>`;
  return data;
}

function generateLigne() {
  let data = "";
  for (let j = 0; j < arrTestLigne.length; j++) {
    data += generateLignein(j);
  }
  data = `<div class="mainContainer">${data}</div>`;
  return data;
}

function generateAllBoard() {
  generateSide();
  zoneLigne.innerHTML = `<div class="allBoardContainer" >${sideUB}<div class="allBoardSmallContainer" >${sideRL}${generateLigne()}${sideRL}</div>${sideUB}</div>`;
}

generateAllBoard();

// const clickGetId = (event) => {
//   var columnSelect = event.target.id;
//   console.log(columnSelect);
// };

// window.addEventListener("click", clickGetId);
