
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Personajes from './Components/Personajes/Personajes';
import { BrowserRouter ,Routes, Route, } from 'react-router-dom'
import Home from './Components/Home/Home';
import React from "react";
import InfoPersonaje from './Components/InfoPersonaje/InfoPersonaje';
import { ThemeContext } from './Components/Cards/Card';

function App() {
  return (
    

    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Personajes" element={<Personajes />} />
        <Route path="/Personajes/:Info" element={<InfoPersonaje />} />
      </Routes>
    </>
  );
}

export default App;
