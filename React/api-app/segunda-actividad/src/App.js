import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Equipos from "./components/Equipos/Equipos";
import CardUser from "./components/CardUser/CardUser";
import "semantic-ui-css/semantic.min.css";
import NASA from "./components/NASA/NASA";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=hwefMWayA97n1dDrPIcthnLzGXJWvocnhTs7Xqro"
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, []);

  // function mostrar(data) {
  //   setUsers(data)
  //   console.log(users);
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <Equipos /> */}
        <div className="flex">
          {users.map((equipo) => (
            <CardUser info={equipo} />
          ))}
        </div>
        <div className="nasa">
          
         <div><NASA info={data} /></div>   
          
        </div>
      </header>
    </div>
  );
}

export default App;
