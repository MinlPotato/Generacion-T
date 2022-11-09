import React, { useContext } from "react";

import ShopContext from "../Context/ShopContext";

function ShoppingCart() {
  const context = useContext(ShopContext);
  console.log(context);

  return context.cart.length >= 1 ? (
    <>
      <h1 className="text-center font">Carrito</h1>
      <div className="container card p-3">
        

        
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          {context.cart.map((p) => {
            return (
              <div className="card">
                <img src={p.newItem.image} style={{ width: "200px" }}></img>
                <div className="card-body">
                  <p>{p.newItem.name}</p>
                  <p>Cantidad : {p.quantity}</p>
                  <button
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
        <div className="container card p-3" style={{ minHeight: "400px" }}>
          
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <h3>No hay ningun producto en su carrito</h3>
           
          </div> 
          <img src="" alt="sad-image"></img>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
