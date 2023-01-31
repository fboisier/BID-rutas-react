import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

const Layout = () => {
    return (
        <>
            <Menu />
            <div className="container">
                <Outlet />
            <footer className="mt-5">
                <div className="alert alert-info">Aplicación WEB Creada en Clases de MERN - Coding Dojo - BID</div>
            </footer>
            </div>
        </>
    )
}

export default Layout