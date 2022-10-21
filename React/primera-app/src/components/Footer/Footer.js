import React from "react";
import "./Footer.css";

function Footer(props) {
    const { hola } = props;
    return (
      <div className="footer">
        <div>
          <h1>Contactanos</h1>
          <hr></hr>
          <ul>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
            <li>hola</li>
          </ul>
        </div>
      </div>
    );
}

export default Footer;
