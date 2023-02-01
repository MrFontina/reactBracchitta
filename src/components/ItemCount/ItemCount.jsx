import React, { useState } from 'react';
import Button1 from '../Button1/Button1';
import './itemCount.css'


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
            <div className='itemCount'>
                <button className='btnAdd' onClick={handleIncrement}>+</button>
                <p>{cantidad}</p>
                <button className='btnLess' onClick={handleDecrement}>-</button>
            </div>


            <Button1 width="150px" weight="bold" onClick={() => onAddToCart(cantidad)} color="MediumAquaMarine" >{text}</Button1>

        </div>
    )
}

export default ItemCount