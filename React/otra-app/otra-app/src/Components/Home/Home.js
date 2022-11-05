import React from "react";
import Carousel from "../Carousel/Carousel";

function Home() {
  return (
    <>
      <h1 className="text-center animate__animated animate__zoomIn my-5">
        Bienvenidos a Nombre de la Empresa
      </h1>
      <div className="d-flex justify-content-center">
        <Carousel />
      </div>
    </>
  );
}

export default Home;
