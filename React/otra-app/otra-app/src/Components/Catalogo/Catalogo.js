import React from "react";
import { AllProductos } from "../Functions/Functions";
import Productos from "./Productos";

function Catalogo() {
  return (
    //una API y cards
    <>
      <div className="container">
        <h1> Productos </h1>
        <Productos />
      </div>
    </>
  );
}

export default Catalogo;
