import React from "react";
import Header from "../Header/Header";
import Main from "../main/main";
import Footer from "../Footer/Footer";
import './Home.css'

function Home() {
  return (
    <>
      <Header active="nav-link" notActive="nav-link active" />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
