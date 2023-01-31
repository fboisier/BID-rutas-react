import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ContactoDetalle = () => {

    const { identificador } = useParams();
    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${identificador}`)
            .then(response => response.json())
            .then(json => setUsuario(json))
    }, [])

    return (
        <div>
            <p>Nombre del Usuario: {usuario.name}</p>
            <p>Email del Usuario: {usuario.email}</p>
            <p>Id del Usuario: {usuario.id}</p>
            <Link to="/contacto">Volver</Link>
        </div>
    )
}

export default ContactoDetalle