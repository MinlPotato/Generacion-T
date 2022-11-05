import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import axios from "axios";
import ProductoCard from "../Card/ProductoCard";

function Producto() {
  const params = useParams();

  const url = `https://rickandmortyapi.com/api/character/${params.id}`
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducto(response.data);

    });
  }, []);


    return (
      <>
        <div> {params.id} </div>
        {producto != null ? (
          <ProductoCard info={producto} />
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </>
    );
  };


export default Producto;
