import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductoCard from "../Card/ProductoCard";
import {productos} from '../Assets/Productosjson'

function Producto() {
  const params = useParams();

  const [Productos, setProductos] = useState(productos)

  const fruta = Productos.find((x) => x.id === params)
   console.log(fruta);
    return (
      <>
        <div> {params.id} </div>
        {Productos != null ? (
          <ProductoCard info={fruta} />
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </>
    );
  };


export default Producto;
