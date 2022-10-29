// import React, {useState} from 'react'
import React from "react"
// import "../Button/Button"

function Item(props) {
  // const []

  return (
    <div className='card'>
        <button className='card-favicon'>♥</button>
        <div className='card-details'>
            <img src={props.img} alt="producto imagen" />
        </div>
        <div className="card-detail">
            <h2>{props.title}</h2>
            <p>{props.detail}</p>
            <h4>${props.price}</h4>
        </div>
        {/* <Button/> */}
    </div>
  )
}

export default Item