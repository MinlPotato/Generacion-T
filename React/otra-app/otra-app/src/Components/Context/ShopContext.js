import React from "react";
import { productos } from "../Assets/Productosjson";

export default React.createContext({
  products: productos,
  cart: [],

  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
