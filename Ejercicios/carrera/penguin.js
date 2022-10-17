let rojo = document.getElementById("rojo");
let azul = document.getElementById("azul");

let roadBlue = document.getElementById("roadBlue");

t = setInterval(funcTime, 1000);
let sum1 = 1;
let sum2 = 1;
let time1 = 0;
let acel1 = 0;

function funcTime() {
    
    if (acel1 != 10) {
        time1++;
        acel1++;
    } else {

    } 
}

document.addEventListener("keydown", function (info) {
  if (info.key == "a") {
    sum1++;
    console.log(sum1);
    roadBlue.style.backgroundPositionX = -sum1 + "px";

    sum1 = sum1 + acel1 * time1 / 2;
    // azul.style.marginLeft = sum1 + "px";
  } else if (info.key == "b") {
    sum2 += 10;
    rojo.style.marginLeft = sum2 + "px";
  }
});

document.addEventListener("keyup", function (info) {
   if (info.key == "a") {
    acel = 0
    roadBlue.style.backgroundPositionX = -sum1 + "px";

   }  
})