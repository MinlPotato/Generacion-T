import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import InfoCard from "../InfoCard/InfoCard";
import "./InfoPersonaje.css";

function InfoPersonaje() {
  const params = useParams();
  console.log(params.id);

  const [characters, setData] = useState([]);
  const [num, setNum] = useState(params.id);
  const url = `https://rickandmortyapi.com/api/character/${num}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);

      window.history.replaceState(
        null,
        "Rick y Morty WIKI",
        `/Personajes/Info/${num}`
      );
    });
  }, [num]);

  function NextChar() {
    if (num >= 1000) {
      setNum(num);
    } else {
      setNum(+num + 1);
    }
  }

  function LastChar() {
    if (num <= 1) {
      setNum(num);
    } else {
      setNum(num - 1);
    }
  }

  return (
    <>
      <Header active="nav-link active" notActive="nav-link" />

      {/* <div className="b-example-divider"></div> */}
      <div className="container mt-3 pt-4 px-5 mb-2">
        <a href="/Personajes/" className="text-secondary">
          Volver a la lista de Personajes
        </a>
      </div>
      <div className="container d-flex px-4  mb-5">
        <div
          className="btn-group flex-fill align-items-center justify-content-around align-self-center text-center align-middle text-white"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            onClick={LastChar}
            className="btn btn-secondary"
          >
            Anterior
          </button>

          <div
            className="flex-grow-1 text-secondary text-white"
            style={{ width: "200px" }}
          >
            <h4 className="m-0 align-middle "> {characters.name}</h4>
          </div>

          <button
            type="button"
            onClick={NextChar}
            className="btn btn-secondary flex-shrink-1"
          >
            Siguiente
          </button>
        </div>
      </div>

      <div key={characters.id}>
        <InfoCard info={characters} />
      </div>

      <Footer />
    </>
  );
}

export default InfoPersonaje;
