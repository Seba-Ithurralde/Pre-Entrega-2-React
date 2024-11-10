import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';
import LogoCompu from './LogoCompu';
import { Link } from 'react-router-dom';

export default function NavBar () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to='/'><LogoCompu /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav m-auto">
        <li className="nav-item"></li>
        <a className="nav-link"></a>
          <Link to="/category/inicio">Inicio</Link>
        <li className="nav-item"></li>
        <a className="nav-link"></a>
          <Link to="/category/productos">Productos</Link>
        <li className="nav-item"></li>
        <a className="nav-link"></a>
          <Link to="/category/contactos">Contactos</Link>
        <li className="nav-item dropdown">
        </li>
      </ul>
    </div>
  </div>
  <CartWidget />
</nav>
    </div>
  )
}

