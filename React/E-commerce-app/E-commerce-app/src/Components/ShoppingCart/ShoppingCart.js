import React, { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import sadFruitImage from "../Assets/sad-fruit.png";

function ShoppingCart() {
  const context = useContext(ShopContext);
  console.log(context.cart);

  return context.cart.length >= 1 ? (
    <>
      <h1 className="text-center font">Carrito</h1>
      <div className="container card p-3" style={{ minHeight: "600px" }}>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          {context.cart.map((p) => {
            return (
              <div className="card">
                <img src={p.newItem.image} style={{ width: "200px" }}></img>
                <div className="card-body text-center">
                  <p>{p.newItem.name}</p>
                  <p>Cantidad : {p.quantity}</p>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => context.removeProductFromCart(p.newItem.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="">
        <h1 className="text-center mb-5 font">Carrito</h1>
        <div
          className="container card p-3 d-flex justify-content-center flex-column"
          style={{ minHeight: "600px" }}
        >
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <h3>No hay ningun producto en tu carrito :(</h3>
          </div>
          <img
            src={sadFruitImage}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "30%",
            }}
            alt="sad-image"
          ></img>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
