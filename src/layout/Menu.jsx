import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
        <div className="container-fluid">
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/acerca">Acerca de</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/pancho">Nueva Pagina Pancho</NavLink>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Menu