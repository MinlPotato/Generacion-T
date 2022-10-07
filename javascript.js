

function paroimpar() {
  var numero = document.getElementById("numero").value;

  if (isOdd(numero) == 1) {
    document.getElementById("number").innerHTML = "Impar";
  } else {
    document.getElementById("number").innerHTML = "Par";
  }
}

function isOdd(num) {
  return num % 2;
}

//-------------------------------------------------------------

function jubilacion() {
  var genero = document.getElementById("seleccionDeGenero").value;

  if (genero == "Hombre") {
    var edad = document.getElementById("jubi").value;

    if (edad >= 65) {
      document.getElementById("respuesta").innerHTML = "Puedes jubilarte";
    } else {
      document.getElementById("respuesta").innerHTML =
        "No llegas a la edad suficiente para jubilarte";
    }
  } else {
    var edad = document.getElementById("jubi").value;
    if (edad >= 60) {
      document.getElementById("respuesta").innerHTML = "Puedes jubilarte";
    } else {
      document.getElementById("respuesta").innerHTML =
        "No llegas a la edad suficiente para jubilarte";
    }
  }
}

//-------------------------------------------------------------

function añadirproducto() {
   var lista = [];
   
  var producto = document.getElementById("super").value;
  lista.push(producto);
  document.getElementById("super").value = "";

  for (let i = 0; i < lista.length; i++) {
    document.getElementById("listasuper").innerHTML += lista[i] + ", ";
  }
}

 function borrar() {
  lista.pop()
  for (var i = 0; i < lista.length; i++) {
    document.getElementById("listasuper").innerHTML = lista[i] + ", ";
  }
 }

//-------------------------------------------------------------

let numbers = [3, 7, 13, 99];

let double = numbers.map(duplicar)

function duplicar(num) {
    return num * 2
}

console.log(numbers);
console.log(double);

//-------------------------------------------------------------

let frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

let frasesExclamadas = frases.map(e => e + "!");

console.log(frases);
console.log(frasesExclamadas);

//-------------------------------------------------------------

let numbers2 = [6, 1, 34, 94, 3, 17];

let mul = numbers2.reduce(multiply);

function multiply(total, num) {
    return total * num;
}
    
console.log(numbers2);
console.log(mul);

//-------------------------------------------------------------
let numeros = [3, 7, 6, 13, 2, 24, 99];
let result = numeros.reduce(impar2, []);

function impar2(accumulator, currentValue) {
    console.log(accumulator)
    return currentValue % 2 === 0 ? accumulator : accumulator.concat(currentValue) ;
}

console.log(result); 

//-------------------------------------------------------------

let numbers3 = [5, 4, 1, 9, 2];

let max = numbers3.reduce(maxnum)
function maxnum (accumulator, currentValue) {
    
    return (accumulator > currentValue ? accumulator : currentValue)
    
    
    
}

console.log(max)

//-------------------------------------------------------------

let join = (arr) => arr.join("")
  console.log(join([1, 2, 3]));

//-------------------------------------------------------------

let numeros4 = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11];

let sinRepetidos = numeros4.reduce(antirepetidos3000, [])

function antirepetidos3000(accumulator, currentValue) {
    
     if (accumulator.indexOf(currentValue) < 0) accumulator.push(currentValue);
     
     return accumulator;
}

console.log(sinRepetidos);