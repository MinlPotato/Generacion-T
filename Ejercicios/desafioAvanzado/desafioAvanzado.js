let Colors = [
  "rgb(255,0,0)", //red
  "rgb(0,0,255)", //blue
  "rgb(255,255,0)", //yellow
  "rgb(0,255,0)", //green
  "rgb(255,0,255)", // pink
  "rgb(0,255,255)", // light blue
  ,
];

let RandomColors = [];

var elems = document.getElementsByClassName("square");
var clickedColor = "";
let pickedColor = "";
let h1 = document.querySelector("h1");
ifEasy = 6;

function clickColor(color) {
  let a = color.style.backgroundColor;
  let clickedColor = a.replace(/\s/g, "");

  console.log(pickedColor);
  console.log(clickedColor);

  if (clickedColor == pickedColor) {
    document.getElementById("message").innerHTML = "Correcto";
    document.getElementById("message").style.color = clickedColor
    document.getElementById("reset").innerHTML = "Play Again?";
    h1.style.color = clickedColor;


    for (let index = 0; index < elems.length; index++) {
      elems[index].style.boxShadow = "0px 10px 30px 5px rgba(0, 0, 0, 0.3)";
      elems[index].style.backgroundColor = clickedColor;
    }
  } else {
    color.style.backgroundColor = "white";
    color.style.boxShadow = "0px 10px 30px 5px rgba(0, 0, 0, 0.0)";
    document.getElementById("message").innerHTML = "Intentalo Nuevamente";
  }
}

function pickColor() {
  pickedColor = RandomColors[Math.floor(Math.random() * ifEasy)];
  document.getElementById("colorDisplay").innerHTML = pickedColor;
}

function randomColor() {
  let colorRandom =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";

  return colorRandom;
}

function generateRandomColors() {
  for (let index = 0; index < ifEasy; index++) {
    RandomColors.push(randomColor());
  }
}

function buttonSelected(button) {
  document.getElementsByClassName("selected")[0].classList.remove("selected");
  button.classList.add("selected");

  if (button == document.getElementById("easyButton")) {
    RandomColors = [];
    ifEasy = 3;

    elems[3].hidden = true;
    elems[4].hidden = true;
    elems[5].hidden = true;

    start();
  } else {
    RandomColors = [];
    ifEasy = 6;

    elems[3].hidden = false;
    elems[4].hidden = false;
    elems[5].hidden = false;

    start();
  }
}

function start() {
    
    document.getElementById("reset").innerHTML = "Nuevos Colores";
    RandomColors = [];
    document.getElementById("message").innerHTML = "";
    h1.style.color = "black";
  randomColor();
  generateRandomColors();
  pickColor();

  for (let index = 0; index < elems.length; index++) {
    
    elems[index].style.backgroundColor = RandomColors[index];
  }
}

start();

console.log(RandomColors);
