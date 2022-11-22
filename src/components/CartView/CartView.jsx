import { useContext } from 'react'
import cartContext from '../../Storage/CartContext'
import Button1 from '../Button1/Button1'
import EmptyCart from '../EmptyCart/EmptyCart'
import { createBuyOrderFirestore } from '../../services/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function CartView() {
  const { cart, clearCart, removeItem, totalPriceInCart, buyOrderId } = useContext(cartContext);
  const navigate = useNavigate();

 

  if (cart.length === 0) {
    return <EmptyCart/>
  }
  else {
   function createBuyOrder(){
      const buyData = {
        buyer: {
          name: "nahuel",
          phone: "123",
          email: "nngg@gmail.com,"
         },
        items: cart,
        total: totalPriceInCart(),
        date: new Date()
      }
      createBuyOrderFirestore(buyData).then(orderId =>{
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
        <Button1 color="lightBlue" onClick={createBuyOrder} >Finalizar compra</Button1>
        


      </div>
    )
  }

}

export default CartView