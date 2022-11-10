import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function CarritoButton() {
  return (
    <>
      <NavLink to="/Carrito">
        <div className="d-flex justify-content-end mx-5">
          <div className="carritoButton">
            <img
              src="https://img.icons8.com/sf-regular-filled/48/undefined/shopping-cart.png"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10px",
                width: "60%",
                fill: "#FFFFFF"
              }}
            ></img>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default CarritoButton;
