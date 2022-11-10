import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./cartWidget.css";
import cartContext from '../../Storage/CartContext';
import { Link } from 'react-router-dom';


function CartWidget() {

  const { totalItemsInCart } = useContext(cartContext)
  
  
  return <div>
    <Link to="/cart"><button className='cart-widget'><FontAwesomeIcon icon={faShoppingCart} /></button></Link>
    
    {totalItemsInCart() > 0 ? <small>{totalItemsInCart()} </small>:
    <></>}
    
    
  </div>
    
  
}

export default CartWidget 