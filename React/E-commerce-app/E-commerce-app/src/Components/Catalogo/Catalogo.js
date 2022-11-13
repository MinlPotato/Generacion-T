import React, { useState, useEffect } from "react";
import { AllProductos } from "../Functions/Functions";
import Cards from "../Card/Card";
import { productos } from "../Assets/Productosjson";
import Carousel from "../Carousel/Carousel";
import CardImage from "../Card/CardImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Catalogo() {
  return (
    <>
      <div className="container">
        <Carousel />
      </div>

      <h1 className="text-center m-5 font"> Catalogo </h1>
      <div className="container">
        <h2 className="my-3 font"> Productos Principales </h2>
        <div className="scroll d-flex flex-start gap-4 justify-content-around flex-nowrap p-4">
          <Cards />
        </div>
        <div className="gap-2 mt-5">
          <h2 className="mt-5 mb-3 mx-3 font">Ofertas!</h2>
          <Container>
            <Row>
              <Col className="mb-4" sm={8}>
                {" "}
                <CardImage />{" "}
              </Col>
              <Col className="" sm={4}>
                <CardImage />
              </Col>
            </Row>
            <Row>
              <Col sm>
                {" "}
                <CardImage />{" "}
              </Col>
              <Col sm>
                {" "}
                <CardImage />
              </Col>
              <Col sm>
                {" "}
                <CardImage />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Catalogo;
