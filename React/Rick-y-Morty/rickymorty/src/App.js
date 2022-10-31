import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Personajes from "./Components/Personajes/Personajes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import React from "react";
import InfoPersonaje from "./Components/InfoPersonaje/InfoPersonaje";
import { ThemeContext } from "./Components/Cards/Card";

function App() {
  return (
    <>
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
