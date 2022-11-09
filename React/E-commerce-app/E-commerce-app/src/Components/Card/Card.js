import React, { useEffect, useState } from "react";
import Producto from "../Producto/Producto";
import "./Card.css";
import ShopContext from "../Context/ShopContext";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { productos } from "../Assets/Productosjson";

function Cards() {
  return (
    <>
      <ShopContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div>
              {context.products.map((p) => {
                return (
                  <Card>
                    <div
                      key={p.id}
                      className="shadow"
                      style={{ width: "200px" }}
                    >
                      <a href={`/Catalogo/${p.id}`}>
                        <img
                          src={p.image}
                          className="card-img-top rounded"
                        ></img>
                      </a>{" "}
                      <Card.Body>
                        <p className="text-center"> {p.name} </p>
                        <Button
                          onClick={() => context.addProductToCart(p)}
                          variant="primary"
                        >
                          AÑADIR AL CARRITO
                        </Button>
                      </Card.Body>
                    </div>
                  </Card>
                );
              })}
            </div>
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    </>
  );
}

export default Cards;
