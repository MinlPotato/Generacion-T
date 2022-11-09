import React from "react";
import Producto from "../Producto/Producto";
import "./Card.css";
import ShopContext from "../Context/ShopContext";
import context from "react-bootstrap/esm/AccordionContext";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

function Cards(props) {
  const { image, name, status, origin, episodes, id } = props.info;

  return (
    <>
      <ShopContext.Consumer>
        {context => (
          <React.Fragment>
            <Card>
               <div className="shadow " style={{ width: "200px" }}>
              <a href={`/Catalogo/${id}`}>
                <img src={image} className="card-img-top rounded"></img>
              </a>{" "}
              <Card.Body>
                 <p> {name} </p>
              <Button
                onClick={() => context.addProductToCart()}
                variant="primary"
              >
                AÑADIR AL CARRITO
              </Button>
              </Card.Body>
             
            </div>
            </Card>
           
          </React.Fragment>
        )}
      </ShopContext.Consumer>

      {/* <div className="card-body bg-black bg-opacity-25">
          <h5 className="card-title text-center p-1"> {name} </h5>
          <p className="card-text p-2">{status}</p>
        </div>

        <ul className="list-group list-group-flush ">
          <li className="list-group-item text-start bg-black bg-opacity-50">
            <p className="card-text text-white"> Origin: {origin.name} </p>
            <p className="card-text text-white">Episodes: {episodes}</p>
          </li>
        </ul> */}
    </>
  );
}

export default Cards;
