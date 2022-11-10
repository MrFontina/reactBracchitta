import { useContext } from 'react'
import cartContext from '../../Storage/CartContext'

function CartView() {
    const { cart }= useContext(cartContext)
    

  return (
    
    <div>
      {cart.map((product) => 
        
        <div>
         <h1>Carrito</h1>
        <h3>{product.title}</h3>
        <h4>{product.price}</h4>
        <h4>{product.cantidad}</h4>
        <img src={product.thumbnail} alt="" />
        </div>
      )}
      
    </div>
  )
}

export default CartView