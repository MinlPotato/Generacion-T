import React, { useEffect, useState, useContext } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { ThemeContext } from "../Cards/Card";
import InfoCard from "../InfoCard/InfoCard";
import './InfoPersonaje.css'

function InfoPersonaje(props) {
  const [characters, setData] = useState([]);
  const [num, setNum] = useState(1);
  const url = "https://rickandmortyapi.com/api/character/" + num;

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [num]);
  console.log();

  function NextChar() {
    if (num >= 20) {
      setNum(num);
    } else {
      setNum(num + 1);
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

      <div className="container d-flex px-4 pt-4 my-5">
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

      <InfoCard info={characters} />

      <Footer />
    </>
  );
}

export default InfoPersonaje;
