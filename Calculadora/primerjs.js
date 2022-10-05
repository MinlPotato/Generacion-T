// function fun() {
//   let nombre = prompt("Cual es tu nombre?", "");
//     alert("Hola " + nombre);
//     document.getElementById("number").innerHTML = nombre;
// }

  
//   document.getElementById("number").innerHTML = x;
// function fun() {
//     var x = document.getElementById("numero").value;
//     Number(x)
//     var isnumber = isNaN(x);
//    if (isnumber == false) {
//     var x = document.getElementById("numero").value;
//      document.getElementById("number").innerHTML = x;
//    } else {
//      document.getElementById("number").innerHTML = "No ha ingresado un numero";
//    }
// }


function calcu1() {
    document.getElementById("test").innerHTML = 1;
    document.getElementById("text").value = document.getElementById("text").value + 1;
}

function calcu2() {
  document.getElementById("test").innerHTML = 2;
  document.getElementById("text").value =
    document.getElementById("text").value + 2;
}

function calcu3() {
  document.getElementById("test").innerHTML = 3;
  document.getElementById("text").value =
    document.getElementById("text").value + 3;
}

function calcu4() {
  document.getElementById("test").innerHTML = 4;
  document.getElementById("text").value =
    document.getElementById("text").value + 4;
}

function calcu5() {
  document.getElementById("test").innerHTML = 5;
  document.getElementById("text").value =
    document.getElementById("text").value + 5;
}

function calcu6() {
  document.getElementById("test").innerHTML = 6;
  document.getElementById("text").value =
    document.getElementById("text").value + 6;
}

function calcu7() {
  document.getElementById("test").innerHTML = 7;
  document.getElementById("text").value =
    document.getElementById("text").value + 7;
}

function calcu8() {
  document.getElementById("test").innerHTML = 8;
  document.getElementById("text").value =
    document.getElementById("text").value + 8;
}

function calcu9() {
  document.getElementById("test").innerHTML = 9;
  document.getElementById("text").value =
    document.getElementById("text").value + 9;
}

function calcu0() {
  document.getElementById("test").innerHTML = 0;
  document.getElementById("text").value =
    document.getElementById("text").value + 0;
}

function calcupm() {
    var text = document.getElementById("text").value;

    if (text.indexOf("-") == -1) {
      document.getElementById("test").innerHTML = "-";
        document.getElementById("text").value =
        "-" + document.getElementById("text").value;
    
    } else {
        var str = document.getElementById("text").value
        document.getElementById("test").innerHTML = "+";
        document.getElementById("text").value = str.replace('-', '');
    }
}

function calcudot() {
  var text = document.getElementById("text").value;

  if (text.indexOf(".") == -1) {
    document.getElementById("test").innerHTML = ".";
    document.getElementById("text").value =
      document.getElementById("text").value + ".";
  } else {
    var str = document.getElementById("text").value;
    document.getElementById("test").innerHTML = "-.";
    document.getElementById("text").value = str.replace(".", "");
  }
}

function calcuplus() {
  document.getElementById("test").innerHTML = "+";
  var x = document.getElementById("text").value;
  document.getElementById("numbers").value =
document.getElementById("numbers").value + x + " + "  ;

  document.getElementById("text").value = "";
}

function calcuminus() {
  document.getElementById("test").innerHTML = "-";
  var x = document.getElementById("text").value;
  document.getElementById("numbers").value =
     document.getElementById("numbers").value + x + " - " ;

  document.getElementById("text").value = "";
}

function calcutimes() {
  document.getElementById("test").innerHTML = "x";
  var x = document.getElementById("text").value;
  document.getElementById("numbers").value =
     document.getElementById("numbers").value + x + " * " ;

  document.getElementById("text").value = "";
}

function calcudivide() {
  document.getElementById("test").innerHTML = "÷";
  var x = document.getElementById("text").value;
  document.getElementById("numbers").value =
     document.getElementById("numbers").value + x + " / " ;

  document.getElementById("text").value = "";
}


function calcuequal() {
    document.getElementById("test").innerHTML = "=";

    var x = document.getElementById("text").value;
  document.getElementById("numbers").value =
    document.getElementById("numbers").value + x;

   var calculo = document.getElementById("numbers").value;
   var resultado = eval(calculo)
   document.getElementById("numbers").value = resultado;
   document.getElementById("text").value = resultado;

   document.getElementById("numbers").value = "";
   
}

function calcureset() {
    document.getElementById("test").innerHTML = "reset";
    document.getElementById("text").value = "";
    document.getElementById("numbers").value = "";
}

function calcudelete() {
    document.getElementById("test").innerHTML = "delete";
    document.getElementById("text").value = document.getElementById("text").value.slice(0, -1);
    
    
  
}