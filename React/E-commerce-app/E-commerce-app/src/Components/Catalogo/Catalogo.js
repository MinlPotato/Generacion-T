import React, { useState, useEffect } from "react";
import { AllProductos } from "../Functions/Functions";
import Productos from "./Productos";
import { productos } from "../Assets/Productosjson";

function Catalogo() {
  const [frutas, setFrutas] = useState([]);

  useEffect(() => {
    setFrutas(productos);
    console.log(productos);
  }, []);

  return (
    <>
      <h1 className="text-center m-5 font"> Catalogo </h1>
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
