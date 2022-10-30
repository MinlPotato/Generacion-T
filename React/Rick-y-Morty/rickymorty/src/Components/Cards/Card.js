import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import InfoPersonaje from "../InfoPersonaje/InfoPersonaje";

function Card(props) {
  const { id, name, species, status, gender, image, origin, episode, url } =
    props.info;

  let alive = "";

  if (status === "Alive") {
    alive = "🟢";
  } else if (status === "unknown") {
    alive = "🟠";
  } else {
    alive = "🔴";
  }

  function GetId(id) {
    <InfoPersonaje info={id} />;
  }

  return (
    <div className="shadow animation" style={{ width: "320px" }}>
      <Link to="/Personajes/Info" onClick={GetId(id)}>
        <img src={image} className="card-img-top"></img>
      </Link>

      <div className="card-body bg-black bg-opacity-25">
        <h5 className="card-title text-center p-1"> {name} </h5>
        <p className="card-text p-2">
          {alive} {status}
        </p>
      </div>

      <ul className="list-group list-group-flush ">
        <li className="list-group-item text-start bg-black bg-opacity-50">
          <p className="card-text text-secondary"> Species: {species} </p>
          <p className="card-text text-secondary"> Gender: {gender} </p>
          <p className="card-text text-secondary"> Origin: {origin.name} </p>
          <p className="card-text text-secondary">Episodes: {episode.length}</p>

          {/* <Link to="/Personajes/Info" onClick={GetId(id)}>
            <div className="text-center">
              <a className="btn btn-primary text-end">Mas Informacion</a>
            </div>
            
          </Link> */}
        </li>
      </ul>
    </div>
  );
}

export default Card;
