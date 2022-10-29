import React from 'react'
import "../Button/Button"

function Item(props) {
  return (
    <div className='card'>
        <button className='card-favicon'>♥</button>
        <div className='card-details'>
            <img src="{props.img}" alt="producto imagen" />
        </div>
        <div className="card-detail">
            <h2>{props.title}</h2>
            <p>{props.detail}</p>
            <h4>${props.price}</h4>
        </div>
        <Button className='priceTag'>ver mas!</Button>
    </div>
  )
}

export default Item