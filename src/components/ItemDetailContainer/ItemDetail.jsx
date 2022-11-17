import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import cartContext from '../../Storage/CartContext';
import ItemCount from '../ItemCount/ItemCount'
import "./itemDetail.css"
import Button1 from '../Button1/Button1';
// import Swal from 'sweetalert2';



function ItemDetail({ product }) {

  
  const [isInCart, setIsInCart] = useState(false);
  // const navigate = useNavigate();
  const { addToCart, clearCart } = useContext(cartContext)

  function onAddToCart(cantidad) {
    const itemForCart = {
      ...product,
      cantidad
    }
    addToCart(itemForCart)

    

    // Swal.fire({
    //   title: 'Item agregado',
    //   text: 'seguir comprando',
    //   icon: 'success',
    //   confirmButtonText: 'Cool'
    // }).then((result)=>
    // {
    //   if (result.isConfirmed){
    //     navigate("/cart");
    //   }
    //   });


    // alert(`Agregaste ${cantidad} unidades de ${product.title} al carrito`);
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
            (<div>
              <Link to="/cart"><Button1 color="green">Ir al carrito</Button1> </Link><br />
              <Button1 color="yellow" onClick={clearCart}>Vaciar carrito</Button1><br />
              {/* <Button1 onClick={() => navigate(-1)}>Volver a atrás</Button1> */}
              <Button1 color="red">Eliminar producto</Button1>
            </div>)

          }

        </div>
      </div>
    )
  )
}

export default ItemDetail