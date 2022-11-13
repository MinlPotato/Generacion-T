import React from "react";

import Background from "../Assets/fruit-Background.png";
import "./Home.css";
import logo from "../Assets/FruitInstant-logo.png";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="background"></div>
      <div className=" textMove position-absolute top-50 start-0 translate-middle d-flex flex-column">
        <h1 style={{fontSize: "62px"}} className="text-center animate__animated animate__zoomIn mx-5 font">
          {" "}
          Bienvenidos a <span className="fontColor">FruitInstant</span>
        </h1>
        <img className="mt-2" src={logo} style={{ width: "300px", marginLeft: "auto", marginRight:"auto" }}></img>{" "}
         <NavLink className="theButton" to="/Catalogo">
        <Button className="theButton mt-5" variant="outline-secondary">
          Catalogo
        </Button>
      </NavLink>
      </div>
      
     
      {/* <div className="d-flex justify-content-center">
        <Carousel />
      </div>  */}
      <div className="otherBackground d-flex justify-content-center ">
        <div className="column container text-center">
          <div className="col  font text-white">
            <h2 className="my-5" style={{ fontSize: "30px" }}>
              Que es FruitInstant?
            </h2>
          </div>
          <div className="col">
            <p className="text-muted fs-4">
              Es una Aplicacion de venta de productos alimenticios,
              especialmente las frutas. Se pueden comprar cantidades de hasta
              200 frutas por envio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
