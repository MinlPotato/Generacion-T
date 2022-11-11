import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, ButtonGroup, ToggleButton, radioValue } from "react-bootstrap";
import { productos } from "../Assets/Productosjson";

export const AllProductos = async (state) => {
  const llamada = await axios.get("https://rickandmortyapi.com/api/character");
  state(llamada.data.results);
};

export function CantButtons(props) {
  
  const [price, setPrice] = useState(props.precio * 25);
  console.log();
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { cantidad: 25, value: "1" },
    { cantidad: 50, value: "2" },
    { cantidad: 75, value: "3" },
    { cantidad: 100, value: "4" },
    { cantidad: 200, value: "5" },
  ];
  

  return (
    <>
      <div className="d-flex gap-2 justify-content-between align-items-center">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="outline-primary"
            name= {radio.cantidad}
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value);
              setPrice(e.currentTarget.name * 50);
              
            }}
          >
            {radio.cantidad}
          </ToggleButton>
        ))}

        <h5 className="mb-0 text-muted">$ {price} </h5>
      </div>
    </>
  );
}
