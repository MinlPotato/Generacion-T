import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Personajes from "./Components/Personajes/Personajes";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import {useEffect} from "react";
import InfoPersonaje from "./Components/InfoPersonaje/InfoPersonaje";




function App() {
  
  function PageTitle() {
  useEffect(() => {
    document.title = 'Rick y Morty WIKI';
  }, []);
}
  return (
    <>
    <PageTitle/>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Personajes" element={<Personajes />} />
        <Route path="/Personajes/Info/:id" element={<InfoPersonaje />} />
      </Routes>
    </>
  );
}

export default App;
