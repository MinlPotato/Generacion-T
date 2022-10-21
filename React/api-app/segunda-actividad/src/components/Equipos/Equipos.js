import React from "react";
import "./Equipos.css";

function Equipos() {
  const listadoEquipos = [
    { equipo: "Argentina", wins: 5, loses: 1 },
    { equipo: "Brasil", wins: 2, loses: 3 },
    { equipo: "Peru", wins: 6, loses: 0 },
    { equipo: "Colombia", wins: 0, loses: 3 },
    { equipo: "Uruguay", wins: 2, loses: 5 },
  ];

  const equipos = ["Argentina", "Brasil", "Peru", "Colombia", "Uruguay"];

  const listItems = listadoEquipos.map((equipo) => (
    <li>
      {" "}
      {equipo.equipo}
      <div className="flex">
        <p>Gano: {equipo.wins}</p>
        <p>Perdio: {equipo.loses}</p>{" "}
      </div>
    </li>
  ));

  return (
    <>
      <div className="titulo">Listado de Equipos</div>
      <ul> {listItems} </ul>
    </>
  );
}

export default Equipos;
