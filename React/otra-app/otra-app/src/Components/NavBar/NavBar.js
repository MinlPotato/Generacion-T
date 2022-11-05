import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navigation = [
    { name: "Home", href: "/Home" },
    { name: "Catalogo", href: "/Catalogo" },
    { name: "Contacto", href: "/Contacto" },
  ];

  return navigation.map((item) => (
    <div className="">
        <NavLink
        key={item.name}
        to={item.href}
        style={{ fill: "#FFFFFF" }}
        className={({ isActive }) => {
          return (
            " nav-link text-decoration-none text-center  " +
            (isActive ? "disabled active" : "text-white")
          );
        }}
      >
        {item.name}
      </NavLink>
    </div>
        
    
      
    ));

      {/* <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="/" className="nav-link px-2 text-secondary">
            Home
          </a>
        </li>
      </ul> */}
}

export default NavBar;
