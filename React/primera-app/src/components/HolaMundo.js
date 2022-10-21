import React from "react";

function HolaMundo (props) {


    const { name, apellido, edad, Alerta } = props.info;
    const {Alerta1} = props.funcion
  

    return (
      <>
        <p>
          {" "}
          Hola soy React App de {name} {apellido}. Tengo {edad} años!{" "}
        </p>
        <button onClick={Alerta}> Hola</button>
        <button onClick={Alerta1}> Hola</button>
      </>
    );
}

export default HolaMundo;

