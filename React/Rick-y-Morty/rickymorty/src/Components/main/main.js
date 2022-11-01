import React from "react";
import img2 from "./rickymorty-wallpaper.png";
import { Link } from "react-router-dom";
import './main.css'

function main() {
  return (
    <>
      {/* <div className="b-example-divider"></div> */}

      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-4 fw-bold titulo test">Rick y Morty</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Somos una wiki de la serie Rick y Morty, creada por Fans para Fans.
            Aca encontraras información de los personajes, localidades e
            informacion de cada episodio de la serie. Tambien, podras compartir
            tus teorias en la sección de Comunidad.
          </p>
        </div>

        <div className="container px-5">
          <img
            src={img2}
            className="img-fluid rounded-3 shadow-lg mb-4"
            alt="img"
            width="700"
            height="500"
            loading="lazy"
          ></img>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Link to="/Personajes">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3 info"
            >
              Personajes
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default main;
