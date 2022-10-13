// class Auto {
//   Constructor(Marca, Modelo, Año, Color, Precio) {
//     this.Marca = Marca;
//     this.Modelo = Modelo;
//     this.Año = Año;
//     this.Color = Color;
//     this.Precio = Precio;
//   }
// }

// let miAuto = new Auto("Peugeot", "208", 2018, "negro", 400000)
// let autoIdeal = new Auto("Ferrari", "575M", 2002, "rojo", 700000)

// autoIdeal.TieneVTV = false

// console.log(autoIdeal);

// class Persona {
//     Constructor(Nombre, Apellido) {
//         nombreYApellido = Nombre + " " + Apellido
//         }
//     }


// let ahora = new Date()
// console.log(ahora);


let ahora = new Date()
let dia = ahora.getDay()
console.log(dia);
let sabado = 6

switch (dia) {
  case 1:
    result = 6 - 1;
    document.getElementById("Resultado").innerHTML = result;
    break
  case 2:
    result = 6 - 2;
    document.getElementById("Resultado").innerHTML = result;
    break
  case 3:
    result = 6 - 3;
    document.getElementById("Resultado").innerHTML = result;
    break
  case 4:
    result = 6 - 4;
    document.getElementById("Resultado").innerHTML = result;
    break
  case 5:
    result = 6 - 5;
    document.getElementById("Resultado").innerHTML = result;
    break
  case 6:
    result = 6 - 6;
    document.getElementById("Resultado").innerHTML = result;
    break
  case 7:
    result = 6 - 7;
    document.getElementById("Resultado").innerHTML = result;
    break
}