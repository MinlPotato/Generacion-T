import React from "react";
import "./Card.css";
import ShopContext from "../ContextT/ShopContext";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import noImage from "../Assets/no-image.png";

function Cards() {
  return (
    <>
      <ShopContext.Consumer>
        {(context) => (
          <React.Fragment>
            {context.products.map((p) => {
              return (
                <Card>
                  <div className="shadow" style={{ width: "200px" }}>
                    {p.image == null ? (
                      <img
                        src={noImage}
                        className="card-img-top rounded"
                      ></img>
                    ) : (
                      <NavLink to={`/Catalogo/${p.id}`}>
                        <img
                          src={p.image}
                          className="card-img-top rounded unzoom"
                        ></img>
                      </NavLink>
                    )}

                    {/* <Card.Body>
                      <p className="text-center"> {p.name} </p>
                      <Button
                        onClick={() => context.addProductToCart(p)}
                        variant="primary"
                      >
                        AÑADIR AL CARRITO
                      </Button>
                    </Card.Body> */}
                  </div>
                </Card>
              );
            })}
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    </>
  );
}

export default Cards;
