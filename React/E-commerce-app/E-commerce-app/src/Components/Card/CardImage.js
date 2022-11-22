import React from 'react'
import Card from "react-bootstrap/Card";


function CardImage(props) {

  const test = props.imagen

  return (
    <Card className="bg-transparent text-white">
      <Card.Img src= {test} alt="Card image" />
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