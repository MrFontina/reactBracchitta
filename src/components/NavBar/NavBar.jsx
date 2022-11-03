import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import "./NavBar.css";


function NavBar() {
  return (
    <nav className='NavBar'>
      
        <Link to="/"><h3>Mi Tienda</h3></Link>
      
      <div className="nav-menu">
        <Link to="/category/cuerdas">Instrumentos de Cuerda</Link>
        <Link to="/category/teclados" >Teclados</Link>
        <Link to="/category/baterias" >Baterias</Link>
        <Link to="/category/amplificacion" >Amplificación</Link>
        <Link to="/category/efectos" >Efectos</Link>
        <Link to="/category/accesorios" >Accesorios</Link>
        <CartWidget />
      </div>
      
    </nav>
  );
}

export default NavBar