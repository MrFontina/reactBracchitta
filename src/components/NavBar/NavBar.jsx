import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import "./NavBar.css";


function NavBar() {
  return (
    <nav className='NavBar'>
      
        <Link to="/"><h1 className='logo'>Mi Tienda</h1></Link>
      
      <div className="nav-menu">
        <Link to="/category/cuerdas" className='link'>Instrumentos de Cuerda</Link>
        <Link to="/category/teclados" className='link'>Teclados</Link>
        <Link to="/category/baterias" className='link'>Baterias</Link>
        <Link to="/category/amplificacion" className='link'>Amplificación</Link>
        <Link to="/category/efectos" className='link'>Efectos</Link>
        <Link to="/category/accesorios" className='link'>Accesorios</Link>
        <CartWidget />
      </div>
      
    </nav>
  );
}

export default NavBar