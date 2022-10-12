const words = [
  "californication", // 0
  "plataforma5", // 1
  "black", // 2
  "summer", // 3
  "flea", // 4
  "aeroplane", // 5
  "peppers", // 6
  "unlimited", // 7
  "arcadium", // 8
  "love", // 9
  "getaway", // 10
  "stadium", // 11
  "quixoticelixer", // 12
  "quarter", // 13
  "snow", // 14
  "dylan", // 15
  "zephyr", // 16
  "funky", // 17
  "chili", // 18
  "electroencefalograma", // 19
  "ovovivíparo", // 20
  "caleidoscopio", // 21
  "potato", // 22
  "burger", // 23
  "Hamburger cheeseburger bigmac whooper", // 24
];

t = setInterval(myTimer, 1000);
let time = 10;
let score = 0;

function myTimer() {
  time--;
  console.log(time);

  document.getElementById("timeSpan").innerHTML = time;
  document.getElementById("score").innerHTML = score;

  if (time == 0) {
    clearInterval(t);
    gameOver();
  }
}

function randomWords() {
  let palabraAleatoria = "";
  number = Math.floor(Math.random() * 25);
  palabraAleatoria = words[number];
  console.log(number);
  addToDOM(palabraAleatoria);
  return palabraAleatoria;
}

function addToDOM(palabra) {
  document.getElementById("randomWord").innerHTML = palabra;
}

function e() {
  let palabraIngresada = document.getElementById("text").value;
  console.log(palabraIngresada);

  let palabraCorrecta = document.getElementById("randomWord").innerHTML;
  console.log(palabraCorrecta);

  if (palabraIngresada == palabraCorrecta) {
    time += 3;
    score++;
    document.getElementById("text").value = "";

    randomWords();
  }
}

randomWords();

function gameOver() {
  let gameOverContainer = document.getElementById("end-game-container");
  newP = document.createElement("p");
  newP.innerHTML = "Game Over";
  newP.style.color = "red";
  newP.style.fontWeight = "bold"; 

  newP2 = document.createElement("p");
  newP2.innerHTML = "Tu puntuación final fue:  " + score;

  Button = document.createElement("button");
  Button.innerHTML = "Reiniciar";
  Button.onclick = function () {
    location.reload()
  };
  Button.className = "btn btn-outline-success";
  

  gameOverContainer.insertAdjacentElement("afterbegin", newP);
  gameOverContainer.insertAdjacentElement("beforeend", newP2);
  gameOverContainer.insertAdjacentElement("afterend", Button);
}
