import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Equipos from "./components/Equipos/Equipos";
import CardUser from "./components/CardUser/CardUser";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  // function mostrar(data) {
  //   setUsers(data)
  //   console.log(users);
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <Equipos /> */}
        <div className='flex'>
          {users.map((equipo) => (
            <CardUser info={equipo} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
