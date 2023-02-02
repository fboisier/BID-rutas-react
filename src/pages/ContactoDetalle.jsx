import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ContactoDetalle = () => {

    const { identificador } = useParams();
    const { error, data: usuario, loading } = useFetch(`https://jsonplaceholder.typicode.com/users/${identificador}`);

    return (
        <div>
            <p>Nombre del Usuario: {(loading)? 'cargando...' : usuario.name} </p>
            <p>Email del Usuario: {(loading)? 'cargando...' : usuario.email}</p>
            <p>Id del Usuario: {(loading)? 'cargando...' : usuario.id}</p>
            <Link to="/contacto">Volver</Link>
            {
                error && <p>{error}</p>
            }
        </div>
    )
}

export default ContactoDetalle