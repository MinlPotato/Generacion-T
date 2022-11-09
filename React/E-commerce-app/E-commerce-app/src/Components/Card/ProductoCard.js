import React from 'react'

function ProductoCard(props) {
    console.log(props);
    const {image, name, status, origin, episodes, id} = props.info

  return (
    <img src={image}></img>
  )
}

export default ProductoCard