import React, { useState, useEffect } from "react";
import { AllProductos } from "../Functions/Functions";
import Cards from "../Card/Card";
import { productos } from "../Assets/Productosjson";
import Carousel from "../Carousel/Carousel";
import CardImage from "../Card/CardImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import oferta1 from "../Assets/Ofertas/OFERTA1.jpg"
import oferta2 from "../Assets/Ofertas/OFERTA3.jpg";
import oferta3 from "../Assets/Ofertas/OFERTA4.jpg";
import oferta4 from "../Assets/Ofertas/OFERTA5.jpg";
import oferta5 from "../Assets/Ofertas/OFERTA6.jpg";

function Catalogo() {
  return (
    <>
      <div className="card container p-5">
      <div className="container">
        <Carousel />
      </div>

      <h1 className="text-center m-5 font"> Catalogo </h1>
      <div className="container">
        <h2 className="my-3 font"> Productos Principales </h2>
        <div
          style={{ overflow: "auto" }}
          className="d-flex flex-start gap-5 justify-content-evenly flex-wrap p-4"
        >
          <Cards />
        </div>
        <div className="gap-2 mt-5">
          <h2 className="mt-5 mb-3 mx-3 font">Ofertas!</h2>
          <Container>
            <Row>
              <Col className="mb-4" sm={8}>
                {" "}
                <CardImage imagen={oferta1} />{" "}
              </Col>
              <Col className="" sm={4}>
                <CardImage imagen={oferta3} />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm>
                {" "}
                <CardImage imagen={oferta4} />
              </Col>
              <Col sm>
                {" "}
                <CardImage imagen={oferta5} />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm>
                {" "}
                <CardImage imagen={oferta2} />{" "}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      </div>
    </>
  );
}

export default Catalogo;
