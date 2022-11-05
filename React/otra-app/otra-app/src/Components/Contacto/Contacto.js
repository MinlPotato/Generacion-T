import React from "react";
import Form from "../Form/Form";
import img from "./ContactoImg.jpg";
import "./Contacto.css";

function Contacto() {
  return (
    //Formulario
    <>
      <div className="banner img-fluid d-flex align-items-center justify-content-center">
        <h1 className="text-center text-white"> Contáctanos!</h1>
      </div>

      <div className="d-flex justify-content-center">
        <Form />
      </div>
    </>
  );
}

export default Contacto;
