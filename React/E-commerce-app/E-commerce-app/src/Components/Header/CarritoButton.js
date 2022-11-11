import React, { useContext } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import ShopContext from "../Context/ShopContext";

function CarritoButton() {
  const context = useContext(ShopContext);

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
                fill: "#FFFFFF",
              }}
            ></img>
            {context.cart.length != 0 ? (
              <div className="carritoNumber d-flex justify-content-center">
                {" "}
                <p
                  className="text-center"
                  style={{
                    marginLeft: "auto",
                    marginRight: "3px",
                    marginTop: "-2px",

                    color: "white",
                  }}
                >
                  {" "}
                  {context.cart.length}
                </p>{" "}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default CarritoButton;
