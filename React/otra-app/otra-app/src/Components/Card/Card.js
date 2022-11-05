import React from "react";
import Producto from "../Producto/Producto";
import "./Card.css";

function Card(props) {
  const { image, name, status, origin, episodes, id} = props.info;


  return (
    <>
      <div className="shadow" style={{ width: "320px" }}>
        <a href={`/Catalogo/${id}`}>
          <img src={image} className="card-img-top"></img>
        </a>

        <div className="card-body bg-black bg-opacity-25">
          <h5 className="card-title text-center p-1"> {name} </h5>
          <p className="card-text p-2">{status}</p>
        </div>

        <ul className="list-group list-group-flush ">
          <li className="list-group-item text-start bg-black bg-opacity-50">
            <p className="card-text text-white"> Origin: {origin.name} </p>
            <p className="card-text text-white">Episodes: {episodes}</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Card;
