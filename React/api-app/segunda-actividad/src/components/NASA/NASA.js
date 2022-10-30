import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


function NASA(props) {
const {copyright, date, explanation, url} = props.info
  return (
    <div className='card'>
      <Card>
    <Image src= {url} wrapped ui={false} />
    <Card.Content>
      <Card.Header> {copyright} </Card.Header>
      <Card.Meta>
        <span className='date'> {date} </span>
      </Card.Meta>
      <Card.Description>
        {explanation}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
    </div>
    

  )
  }
  
  


export default NASA
