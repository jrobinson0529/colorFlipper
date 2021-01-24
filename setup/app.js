// Color array for simple mode
let colorArraySimple = ["red", "blue", "purple", "yellow", "green", "teal", "orange", "maroon", "black", "grey", "aquamarine"];

// Chooses random color from simple color array
let randomColorSimple = colorArraySimple[Math.floor(Math.random()*colorArraySimple.length)];
let ranHexNum = '';
// DOM target elements for index.html
let colorButton = document.querySelector("#random-color");
let colorDisplay = document.querySelector("#color-display");
let bodyBgColorTar = document.querySelector('body').style.background;
// End of DOM target elements for index.html

// DOM target elements for hex-mode.html
let simpleModeToggle = document.querySelector("#simple");
let colorButtonHex = document.querySelector("#random-color-hex");
let colorDisplayHex = document.querySelector("#color-display-hex");
// End of DOM target elements for hex-mode.html



// Need function that chooses a random hex color
const ranHexColor = (event) => {
  let hex = "abcdef0123456789";
  let ranHexArr = [];
  if (event.target.id === "random-color-hex") {
    for (let i = 0; i < 6; i++) {
      ranHexArr.push(hex[Math.floor(Math.random()*hex.length)]);
    }
     ranHexNum = '#' + ranHexArr.join('');
  
     document.querySelector('body').style.backgroundColor = ranHexNum;
     colorDisplayHex.innerHTML = `Background-color: ${ranHexNum}`;
     console.log(event);
  }
};

// Chooses random color from the predetermined color array.
const firstRanColor = (event, ranColor) => {
  //Chooses a random color in Simple mode by default
  document.querySelector('body').style.background = colorArraySimple[Math.floor(Math.random()*colorArraySimple.length)];

  //Sets variable ranColor to the randomly chosen color to display it as a message to the user.
  ranColor = (document.querySelector('body').style.background = colorArraySimple[Math.floor(Math.random()*colorArraySimple.length)]);
  bodyBgColorTar = ranColor;
  console.log(event);

  //Display the color chosen randomly to the user
  colorDisplay.innerHTML = `Background-color: "${bodyBgColorTar}"!`;
};
// const getId = (e) => {
//   console.log(e.target.id);
// };

// Function to toggle simple or hex mode
const isSimpleMode = () => {
  let currPath = window.location.pathname;
  if (currPath === '/setup/index.html') {
    colorButton.addEventListener('click', firstRanColor);
  } else if (currPath === '/hex-mode.html') {
    colorButtonHex.addEventListener('click', ranHexColor);
  }
};
isSimpleMode();
console.log(window.location.pathname);
