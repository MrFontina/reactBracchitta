import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css";

function NavBar() {
  return (
    <div className='NavBar'>
        <h2>Music React</h2>
        <ul>
            <li><a href="">Instrumentos</a></li>
            <li><a href="">Equipos</a></li>
            <li><a href="">Accesorios</a></li>
            <li><a href="">Contacto</a></li>
        </ul>
        <CartWidget></CartWidget>
    </div>
  )
}

export default NavBar