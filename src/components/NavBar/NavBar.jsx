import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import "./NavBar.css";


function NavBar() {
  return (





    <nav className='navBar'>
      <Link to="/"><h1 className='logo'>MUSIC GALAXY</h1></Link>
      <div className='navRight'>
        <div className="dropdown">
          <button className='dropbtn'>Menu</button>
          <div className='dropdownContent'>
            <Link to="/category/cuerdas" className='link'>Instrumentos de Cuerda</Link>
            <Link to="/category/teclados" className='link'>Teclados</Link>
            <Link to="/category/baterias" className='link'>Baterias</Link>
            <Link to="/category/amplificacion" className='link'>Amplificación</Link>
            <Link to="/category/efectos" className='link'>Efectos</Link>
            <Link to="/category/accesorios" className='link'>Accesorios</Link>
          </div>
        </div>
        <CartWidget />
      </div>

    </nav>
  );
}

export default NavBar