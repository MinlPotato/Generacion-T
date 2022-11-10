import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductoCard from "../Card/ProductoCard";
import { productos } from "../Assets/Productosjson";
import ShopContext from "../Context/ShopContext";

function Producto() {
  const { id } = useParams();

  const [Producto, setProducto] = useState();

  useEffect(() => {
    getProductById(id);
  }, []);

  function getProductById(id) {
    const item = productos.find((x) => x.id === id);
    if (item != null) {
      setProducto(item);
    }
  }

  return (
    <>
      {Producto != null ? (
       
        
          <div className="d-flex justify-content-center card container">
            <ProductoCard info={Producto} />
          </div>
       
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
}

export default Producto;
