import React from 'react';
import "./HeaderPag.css";
import img from "./Assets/logo-potato.png";

function Header(props) {
    const {title, subtitle} = props
  return (
  
    <div className='toptop'>
      <div className="top">
      <img src={img} className="logo"></img>
      <h1> {title} </h1>
      <h2> {subtitle} </h2>
      </div>
    </div>
  );
}

export default Header
