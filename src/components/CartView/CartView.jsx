import { useContext } from 'react'
import cartContext from '../../Storage/CartContext'
import Button1 from '../Button1/Button1'
import EmptyCart from '../EmptyCart/EmptyCart'

function CartView() {
  const { cart, clearCart, removeItem, totalPriceInCart } = useContext(cartContext)


  if (cart.length === 0) {
    return <EmptyCart/>
  }
  else {
    return (

      <div>

        <Button1 onClick={clearCart}>Vaciar carrito</Button1>
        <h3>Precio total: ${totalPriceInCart()}</h3>
        <div className='cartView'>

          {cart.map((product) =>
            <div key={product.id} >
              <h1>Carrito</h1>
              <h3>{product.title}</h3>
              <h4>{product.price}</h4>
              <h4>{product.cantidad}</h4>
              <h4>Precio a pagar: ${product.cantidad * product.price} </h4>

              <Button1 color="red" onClick={() => removeItem(product.id)}>Eliminar producto</Button1>
              {/* <img src={product.thumbnail} alt="" /> */}
            </div>
          )}
        </div>
        <Button1>Terminar compra</Button1>


      </div>
    )
  }

}

export default CartView