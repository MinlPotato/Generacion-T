import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { CantButtons } from "../Functions/Functions";

import "./Card.css";

function ProductoCard(props) {
  console.log(props);
  const { image, name, precio, desc } = props.info;

  return (
    <>
      <div className="text-center container mx-5  py-4">
        <div className="row">
          <div className="col-sm-7 ">
            <div className="align-items-center border">
              <img
                className="img-fluid zoom"
                style={{ width: "500px" }}
                src={image}
              ></img>
            </div>
          </div>
          <div className="col-sm-4">
            <Card className="align-items-start p-2">
              <h2 className="mb-2 "> {name} </h2>
              <p className="mb-5 text-muted">Stock Disponible</p>

              <h3 className="text-muted mb-5">
                {" "}
                $ {precio} <span className="text-muted fs-5">c/u</span>{" "}
              </h3>

              <Card.Body className="w-100">
                <h4 className="text-start">Cantidad</h4>
                <div className="d-flex gap-2 justify-content-between">
                 <CantButtons/>
                </div>
              </Card.Body>

              <Card.Body className="d-flex gap-1 flex-column align-items-center w-100 justify-content-center">
                <Button className="w-100">Comprar Ahora</Button>
                <Button className="w-100" variant="outline-primary">
                  Agregar al Carrito
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-sm ">
            <div className="align-items-start text-start">
              <h2 className="pt-3">Descripcion</h2>
              <p className="text-muted"> {desc} </p>
            </div>
          </div>

          <div className="col-sm">col-sm</div>
        </div>
      </div>
    </>
  );
}

export default ProductoCard;