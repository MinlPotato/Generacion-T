//------------------------------------------------------------------ Ejercicio 1

function rendimiento() {
  let texto = document.getElementById("texto");
  let ingresarNota = document.getElementById("nota").value;
  switch (parseInt(ingresarNota)) {
    case 0:
    case 1:
    case 2:
      console.log("Muy mal");
      texto.innerHTML = "Muy mal";
      break;
    case 3:
    case 4:
      console.log("Mal");
      texto.innerHTML = "Mal";
      break;
    case 5:
      console.log("Tan cerca pero tan lejos");
      texto.innerHTML = "Tan cerca pero tan lejos";
      break;
    case 6:
    case 7:
      console.log("Bien!");
      texto.innerHTML = "Bien!";
      break;
    case 8:
    case 9:
    case 10:
      console.log("Muy bien!!");
      texto.innerHTML = "Muy bien!!";
      break;
    default:
      if (ingresarNota == "") {
      } else {
        console.log(
          "Ha ingresado una nota incorrecta. Por favor ingrese numeros entre 0-10"
        );
        texto.innerHTML =
          "Ha ingresado una nota incorrecta." +
          "<br>" +
          "Por favor ingrese numeros entre 0-10";
      }

      break;
  }
}

//------------------------------------------------------------------ Ejercicio 2

function numYPalabra() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let palabra = document.getElementById("palabra").value;

  if (num1 > num2) {
    console.log("sdf");
    document.getElementById("resultado").innerHTML = num1;
  } else if (num1 == num2) {
    let firstAndLast =
      palabra[palabra.length - palabra.length] + palabra[palabra.length - 1];
    document.getElementById("resultado").innerHTML = firstAndLast;
  } else {
    document.getElementById("resultado").innerHTML = num2;
  }
}

//------------------------------------------------------------------ Ejercicio 3

let frutasYVerduras = [
  { fruta: "banana" },
  { verdura: "apio" },
  { fruta: "manzana" },
  { fruta: "frutilla" },
  { verdura: "zanahoria" },
  { fruta: "kiwi" },
  { fruta: "sandia" },
  { fruta: "melon" },
  { verdura: "repollo" },
  { fruta: "mango" },
];

let frutas = frutasYVerduras.reduce(checkFruta, []);

function checkFruta(accumulator, currentValue) {
  console.log(currentValue);

  return currentValue.fruta == frutasYVerduras.fruta
    ? accumulator
    : accumulator.concat(currentValue.fruta);
}
console.log(frutas);

//------------------------------------------------------------------ Ejercicio 4

let unidades = [1, 2, 0, 4];

let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];

function dispenserGaseosas(unidad, gaseosa) {
  let gaseosaEnStock = [];

  for (let index = 0; index < gaseosa.length; index++) {
    let element = new Object();
    element.marca = gaseosa[index];
    element.cantidad = unidad[index];

    gaseosaEnStock.push(element);
  }

  return gaseosaEnStock;
}

let dispenser = dispenserGaseosas(unidades, gaseosas);
// Se crea un Array con los objetos adentro donde tiene la informacion de la marca y el stock.

if (dispenser[0].cantidad > 0) {
  // A base de poner el Index y .cantidad podemos saber si esta en stock o no.
  console.log("En stock");
} else {
  console.log("No en stock");
}

//------------------------------------------------------------------ Ejercicio 5

let Arreglo = [
  { nombre: "Juan", edad: 19 },
  { nombre: "Pedro", edad: 23 },
  { nombre: "Juana", edad: 18 },
  { nombre: "Pedra", edad: 25 },
];

function añoDeNacimiento(Lista) {
  for (let index = 0; index < Lista.length; index++) {
    let añoCuenta = new Date().getFullYear() - Lista[index].edad;

    Lista[index].añoDeNacimiento = añoCuenta;
  }
  return Lista;
}

console.log(añoDeNacimiento(Arreglo));

//------------------------------------------------------------------