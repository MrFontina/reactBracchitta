import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./cartWidget.css";
import cartContext from '../../Storage/CartContext';


function CartWidget() {

  const { totalItemsInCart } = useContext(cartContext)
  

  return <div>
    <button className='cart-widget'><FontAwesomeIcon icon={faShoppingCart} /></button>
    <small>{totalItemsInCart()} </small>
    
  </div>
    
  
}

export default CartWidget 