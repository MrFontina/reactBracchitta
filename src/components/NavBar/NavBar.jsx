import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import "./NavBar.css";


function NavBar() {
  return (
    <nav className='NavBar'>
        <Link to="/"><h3>Mi Tienda</h3></Link>
        <ul>
          <li><Link to="/detalle">Detalle</Link></li>
        </ul>
        
        
        <CartWidget></CartWidget>
    </nav>
  );
}

export default NavBar