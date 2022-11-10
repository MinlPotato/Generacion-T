import "./App.css";
import Form from "./Components/Form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import Catalogo from "./Components/Catalogo/Catalogo";
import Contacto from "./Components/Contacto/Contacto";
import Producto from "./Components/Producto/Producto";
import Footer from "./Components/Footer/Footer";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import "animate.css";
import GlobalState from "./Components/Context/Context";


function App() {
  return (
    <GlobalState>
       <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Catalogo" element={<Catalogo />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
          <Route path="/Catalogo/:id" element={<Producto />}></Route>
          <Route path="/Carrito" element={<ShoppingCart/>}></Route>
        </Routes>

        <Footer/>
      </BrowserRouter>

      {/* <div className='d-flex justify-content-center m-5'>
        <Form/>
      </div> */}
    </>
    </GlobalState>
   
  );
}

export default App;
