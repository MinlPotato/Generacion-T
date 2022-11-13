import React, { useState, useEffect } from "react";
import { AllProductos } from "../Functions/Functions";
import Cards from "../Card/Card";
import { productos } from "../Assets/Productosjson";
import Carousel from "../Carousel/Carousel";

function Catalogo() {
  return (
    <>
    <div className="d-flex justify-content-center">
       <Carousel/>
    </div>
   
      <h1 className="text-center m-5 font"> Catalogo </h1>
      <div className="container">
        <h2 className="my-3 font"> Productos Principales </h2>
        <div className="scroll d-flex flex-start gap-4 justify-content-around flex-nowrap p-4">
          <Cards />
        </div>
      </div>
    </>
  );
}

export default Catalogo;
