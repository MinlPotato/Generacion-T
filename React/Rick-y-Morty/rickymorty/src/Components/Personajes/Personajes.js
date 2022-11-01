import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import Card from "../Cards/Card";
import "./Personajes.css";
import Footer from "../Footer/Footer";

const AllPersonajes = async (state) => {
  const llamada = await axios.get("https://rickandmortyapi.com/api/character");
  state(llamada.data.results);
};

const Personajes = () => {
  const [characters, setData] = useState(null);
  useEffect(() => {
    AllPersonajes(setData);
  }, []);
  console.log(characters);

  return (
    <>
      <Header active="nav-link active" notActive="nav-link" />

      {/* <div className="b-example-divider"></div> */}

      <div className="px-4 pt-1 my-3 text-center">
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
          <p className="lead mb-4 text-center">
           <strong>Apreta en la Imagen </strong>  del personaje para ver mas informacion.
          </p>
        </div>

        <div className="flex">
          {characters != null ? (
            characters
              .filter((character, idx) => idx < 20)
              .map((character, index) => (
                <div key={character.id}>
                  <Card info={character} />
                </div>
              ))
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
        
      </div>

      <Footer />
    </>
  );
};

export default Personajes;
