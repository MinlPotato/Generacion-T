import logo from "./logo.svg";
import "./App.css";
//import HolaMundo from "./components/HolaMundo";
import Equipo from "./components/Equipo";
import HeaderPag from "./components/Header/HeaderPag";
import Card from "./components/Card/Card";
import "semantic-ui-css/semantic.min.css";
import { Container, Header, List } from "semantic-ui-react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

function App() {
  const headerlist = {
    titulo: "Bienvenidos a Potato CORP a",
    subtitulo: "Creamos las mejores papas del mundo",
  };

  function aler(equipo) {
    alert("Gano" + equipo);
  }

  return (
    <div className="App">
      <header className="App-header">
        <HeaderPag
          title="Bienvenidos a Potato CORP"
          subtitle="Creamos las mejores papas del mundo"
        />
      </header>

      <div className="cards">
        <div>
          <Card user="PotatoMaster" desc="El manager de Potato Corp" img="" />
        </div>
        <div>
          <Card
            user="PotatoDesigner"
            desc="El diseñador general de Potato Corp"
            img=""
          />
        </div>
        <div>
          <Card
            user="PotatoDeveloper"
            desc="Uno de los developers de Potato Corp"
            img=""
          />
        </div>
      </div>
      <h2 className="center">
        Logueate a nuestra pagina o crea una cuenta para comprar nuestro
        productos
      </h2>
      <div className="login">
        <div >
          <Login />
        </div>
      </div>

      {/* <Equipo aler={aler} /> */}
      <div>
        <Footer />
      </div>

      {/* <HolaMundo info={listado} funcion={aler} /> */}
    </div>
  );
}

export default App;
