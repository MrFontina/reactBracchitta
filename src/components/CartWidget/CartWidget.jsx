import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./cartWidget.css";


function CartWidget() {
  return (
    <button className='cart-widget'><FontAwesomeIcon icon={faShoppingCart} /></button>
  )
}

export default CartWidget