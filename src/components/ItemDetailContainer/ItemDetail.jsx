import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cartContext from '../../Storage/CartContext';
import ItemCount from '../ItemCount/ItemCount'
import "./itemDetail.css"
import Button1 from '../Button1/Button1';
import Swal from 'sweetalert2';



function ItemDetail({ product }) {

  
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();
  const { addToCart, removeItem } = useContext(cartContext)

  function onAddToCart(cantidad) {
    const itemForCart = {
      ...product,
      cantidad
    }
    addToCart(itemForCart)

    

    Swal.fire({
      title: '',
      text: (`Agregaste ${cantidad} unidades de ${product.title} al carrito`),
      icon: 'success',
      confirmButtonText: 'Ok!'
    })  
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
          {!isInCart ? (            
            <ItemCount
              onAddToCart={onAddToCart}
              stock={product.stock}
              text="Agregar al carrito" />               
          ) :

            (<div className='containerBotones'>
              <Link to="/cart"><Button1   color="green">Ir al carrito</Button1> </Link><br />
              <Button1  onClick={() => {removeItem(product.id); setIsInCart(false)}} color="red">Eliminar producto</Button1><br/>
              <Button1  color="lightblue"  onClick={() => navigate(-1)}>Seguir comprando</Button1><br />              
            </div>)

          }

        </div>
      </div>
    )
  )
}

export default ItemDetail