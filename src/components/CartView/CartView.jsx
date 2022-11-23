import { useContext } from 'react'
import cartContext from '../../Storage/CartContext'
import Button1 from '../Button1/Button1'
import EmptyCart from '../EmptyCart/EmptyCart'
import { createBuyOrderFirestore } from '../../services/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import BuyForm from './BuyForm'
import "./cartView.css"


function CartView() {
  const { cart, clearCart, removeItem, totalPriceInCart, buyOrderId } = useContext(cartContext);
  const navigate = useNavigate();



  if (cart.length === 0) {
    return <EmptyCart/>
  }
  else {
    function createBuyOrder(userData) {
      const buyData = {
        buyer: userData,
        items: cart,
        total: totalPriceInCart(),
        date: new Date(),
        };
      
      createBuyOrderFirestore(buyData).then(orderId => {
        clearCart()
        Swal.fire({
          title: `Gracias por tu compra!`,
          text: `El identificador de tu orden es ${orderId}`,
          icon: "success",

        })
        navigate(`/checkout/${orderId}`)
        buyOrderId(orderId)
      })

    }
    return (



      <div>
        <h1 >CARRITO</h1>
        <div className='cartView'>
          {cart.map((product) =>
            <div key={product.id} >
              <h3 style={{ color: "brown" }}>{product.title}</h3>
              <img src={product.thumbnail} alt="" />
              <h4 style={{ color: "red" }}>Cantidad: {product.cantidad}</h4>
              <h4 style={{ color: "violet" }}>Precio por unidad: {product.price}</h4>
              <h4 style={{ color: "green" }}>Precio a pagar: ${product.cantidad * product.price} </h4>
              <Button1 color="red" onClick={() => removeItem(product.id)}>Eliminar producto</Button1>

            </div>
          )}
        </div>
        <div className='form'>
          <h3>Precio total: ${totalPriceInCart()}</h3>          
          <BuyForm  onSubmit={createBuyOrder}/> <br />
          <Button1 color="yellow" onClick={clearCart}>Vaciar carrito</Button1><br />
        </div>
      </div>
    )
  }
}

export default CartView