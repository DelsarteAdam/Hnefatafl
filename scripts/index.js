let arrTestLigne = [
  [
    "corner",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "corner",
  ],
  [
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
  ],
  [
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
  ],
  [
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
  ],
  [
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
  ],
  [
    "board",
    "board",
    "board",
    "board",
    "board",
    "corner",
    "board",
    "board",
    "board",
    "board",
    "board",
  ],
  [
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
  ],
  [
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
  ],
  [
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
  ],
  [
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
  ],
  [
    "corner",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "board",
    "corner",
  ],
];

let zoneLigne = document.getElementById("lignetest");

function generateLignein(j) {
  let data = "";
  for (let i = 0; i < arrTestLigne[j].length; i++) {
    if (arrTestLigne[j][i] === "board") {
      data += `<div class="board" id="board${j}${i}"></div>`;
    } else if (arrTestLigne[j][i] === "corner") {
      data += `<div class="corner" id="board${j}${i}"></div>`;
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
  zoneLigne.innerHTML = data;
}

generateLigne();
