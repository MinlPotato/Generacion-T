import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, ButtonGroup, ToggleButton, radioValue } from "react-bootstrap";
import { productos } from "../Assets/Productosjson";

export const AllProductos = async (state) => {
  const llamada = await axios.get("https://rickandmortyapi.com/api/character");
  state(llamada.data.results);
};

