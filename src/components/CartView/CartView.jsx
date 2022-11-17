import { useContext } from 'react'
import cartContext from '../../Storage/CartContext'
import Button1 from '../Button1/Button1'

function CartView() {
  const { cart, clearCart, removeItem } = useContext(cartContext)


  return (

    <div>

      <Button1 onClick={clearCart}>Vaciar carrito</Button1>
      <div className='cartView'>
        {cart.map((product) =>
          <div key={product.id} >
            <h1>Carrito</h1>
            <h3>{product.title}</h3>
            <h4>{product.price}</h4>
            <h4>{product.cantidad}</h4>
            <h4>Precio a pagar: ${product.cantidad * product.price} </h4>
            <Button1 onClick={()=>removeItem(product.id)}>Eliminar producto</Button1>
            {/* <img src={product.thumbnail} alt="" /> */}
          </div>
        )}
      </div>



    </div>
  )
}

export default CartView