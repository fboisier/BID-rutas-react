import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

const Layout = () => {
    return (
        <>
            <Menu />
            <Outlet />
            <footer className="mt-5">Pie de Pagina</footer>
        </>
    )
}

export default Layout