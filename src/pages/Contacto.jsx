import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Contacto = () => {

  const { data: usuarios, error, loading } = useFetch('https://jsonplaceholder.typicode.com/users');
  
  return (
    <div>
      <h1>Contacto</h1>
      <p>Esta es la página de contactos.</p>
      <ul>
        {
          (loading) ? <span className="loader"></span>
          :
          usuarios.map( (user, index) => <li key={index}><Link to={ `/contacto/${user.id}` }>{user.name}</Link></li> )
        }
        {error && <p>{error}</p>}
      </ul>
    </div>
  )
}

export default Contacto