import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart }  from "@fortawesome/free-solid-svg-icons";

import * as iconList from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
    console.log(iconList);
  return (
    <button>Comprar
    <FontAwesomeIcon icon={ faShoppingCart } /></button>
    
  )
}

export default CartWidget