import React, { useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./itemDetail.css"



function ItemDetail({product}) {

    const [isInCart, setIsInCart] = useState(false);

    function onAddToCart(cantidad) {
       alert(`Agregaste ${cantidad} unidades de ${product.title} al carrito`);
       setIsInCart(true);        
    }

  return (
       (      
        <div className='item-detail'>
         <div className='item-detail-img'>
             <img src={product.thumbnail} alt="producto imagen" />
         </div>
         <div className="item-detail-data">
             <h2>{product.title}</h2>
             <p>{product.description}</p>
             <h4>${product.price}</h4>
             { !isInCart ? (
                <ItemCount 
              onAddToCart={onAddToCart}
              stock={product.stock}
              text="Agregar al carrito" /> 
             ) :
             ( <button>Ir al carrito</button> )

             }
            
         </div>
        </div>    
     )
  )
}

export default ItemDetail