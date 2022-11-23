import React, { useState } from 'react';
import Button1 from '../Button1/Button1';


function ItemCount({ stock, onAddToCart, text }) {
    const [cantidad, setCantidad] = useState(1);

    function handleIncrement() {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }
    function handleDecrement() {

        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }
    

    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <p>{cantidad}</p>
            <Button1 width="150px" onClick={() => onAddToCart(cantidad)} color="green" >{text}</Button1>
           
        </div>
    )
}

export default ItemCount