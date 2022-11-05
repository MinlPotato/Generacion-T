import React from "react";
import axios from "axios";

export const AllProductos = async (state) => {
  const llamada = await axios.get("https://rickandmortyapi.com/api/character");
  state(llamada.data.results);
};

