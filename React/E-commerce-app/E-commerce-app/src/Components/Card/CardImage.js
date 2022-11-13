import React from 'react'
import Card from "react-bootstrap/Card";
import banner from "../Assets/paisaje.jpg";

function CardImage() {
  return (
    <Card className="bg-transparent text-white">
      <Card.Img src= {banner} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardImage