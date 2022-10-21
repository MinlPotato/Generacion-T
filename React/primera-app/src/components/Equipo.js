import React, { useState, useEffect } from "react";

function Equipo (props) {
    const [equipo, SetEquipo] = useState(0)
    console.log(props);

    const [euro, Dolar] = useState(0)
    

function EuroADolar (num) {
    
    console.log(num);
    Dolar("$" + num / 2)
    console.log(euro);
}


function mostrar () {
    SetEquipo(equipo + 1);
    console.log(equipo);
}

useEffect( () => {
    document.title = "Total: " + equipo
    console.log("ejecutacion");
}, [equipo])
  
    return (
      <>
        <h3>Lista de equipos</h3>
        <ul>
          <li>River</li>
          <li>Boca</li>
          <li>Mandiyu</li>
        </ul>

        <button onClick={() => mostrar()}>Ver quien ganó</button>
        <p> {equipo} </p>
        <h3>Conversion de Euros a Dolares</h3>
        <input onChange={e => EuroADolar(e.target.value)} id= "input" placeholder="Ingrese cantidad aqui"></input>
        <p> {euro} </p>
      </>
    );
}

export default Equipo;