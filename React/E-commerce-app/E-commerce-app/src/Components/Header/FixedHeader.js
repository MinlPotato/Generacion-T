import React from 'react'
import NavBar from "../NavBar/NavBar";

function FixedHeader(props) {

  return (
    <>
      <header className="p-3 text-bg-dark show-animation fixed-top shadow mb-4">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img src=""></img>
            </a>

            <ul className="nav nav-pills col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small text-white">
                <NavBar />
                {/*Crea el NavLink y verifica cual url esta activa */}
              </li>
            </ul>

            {/* 
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..."> </input>
        </form> */}

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default FixedHeader