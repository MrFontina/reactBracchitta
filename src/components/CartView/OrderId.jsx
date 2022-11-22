import { useContext } from "react"
import cartContext from "../../Storage/CartContext"
import { Link } from "react-router-dom";
import Button1 from "../Button1/Button1";

function OrderId() {
  const { orderId } = useContext(cartContext);

  return(
  <div>
     <h1>Gracias por tu compra!</h1>
     <h2>Tu orden de compra es: {orderId}</h2>
     <Link to="/"><Button1 color="pink">Volver al inicio</Button1></Link>
  </div>
 

)

}

export default OrderId