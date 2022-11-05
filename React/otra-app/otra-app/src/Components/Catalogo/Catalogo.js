import React from "react";
import { AllProductos } from "../Functions/Functions";
import Productos from "./Productos";

function Catalogo() {
  return (
    //una API y cards
    <>
      <h1 className="text-center m-5"> Catalogo </h1>
      <div className="container">
        <h2 className="my-3"> Productos Principales </h2>
        <Productos />
      </div>

      <div className="container">
        <h2 className="mb-3 mt-5"> Productos Secundarios </h2>
        <Productos />
      </div>
    </>
  );
}

export default Catalogo;
