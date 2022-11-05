import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import Card from "../Cards/Card";
import "./Personajes.css";
import Footer from "../Footer/Footer";
import Pagination from "../Pagination/Pagination";


const url = `https://rickandmortyapi.com/api/character/?page=`;

const AllPersonajes = async (state) => {
  const llamada = await axios.get(url);

  state(llamada.data.results);
};

const Personajes = () => {
  const [characters, setData] = useState(null);

  useEffect(() => {
    AllPersonajes(setData);
  }, []);
  console.log(characters);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  var currentPost = "";
  {
    characters != null
      ? (currentPost = characters.slice(indexOfFirstPost, indexOfLastPost))
      : console.log("wait");
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

        <div className="col-lg-6 mb-1 mx-auto">
          <p className="lead mb-4 text-center">
            Veras todos los personajes importantes (y otros no mucho) de Rick y
            Morty, sabras sus nombres, cuantos episodios estuvieron y si estan
            vivos o muertos.
          </p>
          <p className="lead mb-5 text-center">
            <strong>Apreta en la Imagen </strong> del personaje para ver mas
            informacion.
          </p>
        </div>

        <div className="container d-flex justify-content-center">
          {characters != null ? (
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={characters.length}
              paginate={paginate}
            />
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>

        <div className="flex">
          {characters != null ? (
            currentPost.map((character) => (
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
