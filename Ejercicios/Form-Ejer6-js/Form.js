let name = document.getElementById("name").value;
let apellido = document.getElementById("apellido").value;
let age = document.getElementById("age").value;
let email = document.getElementById("email").value;


function cambio(test) {
    console.log(test.value);
    return test.value
}

function gender(sex) {
  console.log(sex.value);
  return sex.value;
}

const checkbox = document.getElementById("esArgentino");
let Argentino = false;

checkbox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    Argentino = true;
    console.log(Argentino);
  } else {
    Argentino = false;
    console.log(Argentino);
  }
});
