import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import "./NavBar.css";


function NavBar() {
  return (
    <nav className='NavBar'>
        <Link to="/"><h3>Mi Tienda</h3></Link>
        <ul>
          <li><Link to="/category/cuerdas">Instrumentos de Cuerda</Link></li>
          <li><Link to="/category/teclados" >Teclados</Link></li>
          <li><Link to="/category/baterias" >Baterias</Link></li>
          <li><Link to="/category/amplificacion" >Amplificación</Link></li>
          <li><Link to="/category/efectos" >Efectos</Link></li>
          <li><Link to="/category/accesorios" >Accesorios</Link></li>
        </ul>
        
        
        <CartWidget></CartWidget>
    </nav>
  );
}

export default NavBar