import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import './CardUser.css'

function CardUserFunc(props) {
  const { avatar_url, login, type } = props.info;

  return (
    <div className="flex">
    <Card>
      <Image src={avatar_url} wrapped ui={false} />
      <Card.Content>
       <Card.Header> {login} </Card.Header>
        <Card.Meta>
          <span className="date"> {type} </span>
        </Card.Meta>
        
      </Card.Content>
    </Card>
    </div>
  );
}

  


export default CardUserFunc;
