let colorArraySimple = ["red", "blue", "purple", "yellow", "green", "teal", "orange", "maroon", "black", "grey", "aquamarine"];
let colorArrayHex = [];
// Chooses random color from Simple and Hex
let randomColorSimple = colorArraySimple[Math.floor(Math.random()*colorArraySimple.length)];
let randomColorHex = colorArrayHex[Math.floor(Math.random()*colorArrayHex.length)];

let simpleMode = false;
let hexMode = false;
// DOM target elements
let hexButton = document.querySelector("#hex");
let simpleButton = document.querySelector("#simple");
let colorButton = document.querySelector("#random-color");
let colorDisplay = document.querySelector("#color-display");
let bodyBgColorTar = document.querySelector('body').style.background;
// Need to change modes
// Need function that chooses a random hex color






const firstRanColor = (event, ranColor, ranHex) => {
  //Chooses a random color in Simple mode by default
  document.querySelector('body').style.background = colorArraySimple[Math.floor(Math.random()*colorArraySimple.length)];

  //Sets variable ranColor to the randomly chosen color to display it as a message to the user.
  ranColor = (document.querySelector('body').style.background = colorArraySimple[Math.floor(Math.random()*colorArraySimple.length)]);
  bodyBgColorTar = ranColor;
  console.log(event);

  //Display the color chosen randomly to the user
  colorDisplay.innerHTML = `Background-color: "${bodyBgColorTar}"!`;
};


if (simpleMode === false && hexMode === false) {
  colorButton.addEventListener('click', firstRanColor);
}
