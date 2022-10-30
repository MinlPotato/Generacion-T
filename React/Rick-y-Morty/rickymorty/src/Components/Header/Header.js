import React from 'react'
import { Link } from 'react-router-dom';
import img from "./Rick_and_Morty.svg.png";
import './Header.css'

function Header(props) {

  const {active, notActive} = props
  return (
    <>
      <div className="bg-dark shadow">
        <div className="container ">
          <header className="d-flex flex-wrap justify-content-center py-4 mb-2 ">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <svg className="bi me-2" width="40" height="32" src={img}></svg>
              <span className="fs-4">
                {" "}
                <img src={img} height="auto" width="120"></img>{" "}
              </span>
            </a>

            <ul className="nav nav-pills gap-3">
              <li className="nav-item">
                <Link to="/" className={notActive}>
                  {" "}
                  Inicio
                  {/* <a href="" className= {notActive} aria-current="page">
                Inicio
              </a> */}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Personajes" className={active} aria-pressed="true">
                  {" "}
                  Personajes
                  {/* <a href="#" className= {active}>
                Personajes
              </a> */}
                </Link>
              </li>
              
            </ul>
          </header>
        </div>
      </div>
    </>
  );
}

export default Header