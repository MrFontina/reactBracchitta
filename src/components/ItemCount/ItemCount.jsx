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
            <Button1 onClick={() => onAddToCart(cantidad)} color="red" >{text}</Button1>
           
        </div>
    )
}

export default ItemCount