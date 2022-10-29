import React, {useState} from 'react';


function ItemCount(props) {
    let [cantidad, setCantidad] = useState(0);

    function handleIncrement(){
        setCantidad(cantidad +1);
    }
    function handleDecrement(){
        setCantidad(cantidad -1);
        if (cantidad > 1){
            setCantidad(cantidad -1)
        }
    }

  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <p>{cantidad}</p>
    </div>
  )
}

export default ItemCount