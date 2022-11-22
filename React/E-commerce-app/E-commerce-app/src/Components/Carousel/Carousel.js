import React from 'react'
import img from './carousel-Fondo.jfif'
import banner from '../Assets/paisaje.jpg'
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css"

function CarouselHome() {
  return (
    <Carousel className="d-flex justify-content-center w-100 shadow">
      <Carousel.Item className="">
        <img className="d-block w-100" src={banner} alt="First slide" />
        <Carousel.Caption className="texto">
          <h3>Todas las frutas que necesites en un solo lugar!</h3>
          <p>
            Se hace un descuento del 10% si la cantidad comparada supera las 200
            unidades!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner} alt="Second slide" />

        <Carousel.Caption className="texto">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner} alt="Third slide" />

        <Carousel.Caption className="texto">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome