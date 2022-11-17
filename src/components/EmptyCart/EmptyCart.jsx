import React from 'react'
import { Link } from 'react-router-dom'
import Button1 from '../Button1/Button1'

function EmptyCart() {
  return (
    <div>
        <h1>El carrito está vacío</h1>
        <Link to="/"><Button1>Volver a la tienda</Button1></Link>
            

    </div>
    
  )
}

export default EmptyCart