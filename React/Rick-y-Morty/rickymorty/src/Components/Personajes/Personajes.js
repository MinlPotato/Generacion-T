import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import Card from "../Cards/Card";
import "./Personajes.css";
import Footer from "../Footer/Footer";
import InfoPersonaje from "../InfoPersonaje/InfoPersonaje";

function Personajes() {
  const [characters, setData] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setData(response.data.results);
    });
  }, []);
  console.log(characters);

  return (
    <>
      <Header active="nav-link active" notActive="nav-link" />

      {/* <div className="b-example-divider"></div> */}

      <div className="px-4 pt-1 my-3 text-center border-bottom">
        <div className="test">
          <h3 className="display-4 fw-bold text-center thing text-white test">
            Personajes
          </h3>
        </div>

        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 text-center">
            Veras todos los personajes importantes (y otros no mucho) de Rick y
            Morty, sabras sus nombres, cuantos episodios estuvieron y si estan
            vivos o muertos.
          </p>
        </div>

        <div className="flex">
          {characters.map((character) => (
            <div key={character.id}>
              <Card info={character} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Personajes;
