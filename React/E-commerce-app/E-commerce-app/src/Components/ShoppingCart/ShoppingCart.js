import React, { useContext } from "react";

import ShopContext from "../Context/ShopContext";

function ShoppingCart() {
  const context = useContext(ShopContext)
  console.log(context);

  return (
    <>
      <div>ShoppingCart</div>
      <div>
        <h1>Productos</h1>

        <article className="box">
          <h3>Carrito</h3>
          <div>
            {context.cart.map((p) => {
              return (
                <div>
                  <p>{p.newItem.name}</p>
                  <p>Cantidad : {p.quantity}</p>
                  <button
                    onClick={() => context.removeProductFromCart(p.newItem.id)}
                  >
                    Eliminar
                  </button>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </>
  );
}

export default ShoppingCart;
