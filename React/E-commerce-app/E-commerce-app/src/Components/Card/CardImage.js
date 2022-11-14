import React from 'react'
import Card from "react-bootstrap/Card";
import banner from "../Assets/paisaje.jpg";

function CardImage() {
  return (
    <Card className="bg-transparent text-white">
      <Card.Img src= {banner} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardImage