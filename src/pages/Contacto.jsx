import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Contacto = () => {

  const [usuarios, setUsuarios] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsuarios(json))
  }, [])
  
  return (
    <div>
      <h1>Contacto</h1>
      <p>Esta es la página de contactos.</p>
      <ul>
        {
          (!usuarios) ? <span className="loader"></span>
          :
          usuarios.map( (user, index) => <li key={index}><Link to={ `/contacto/${user.id}` }>{user.name}</Link></li> )
        }
      </ul>
    </div>
  )
}

export default Contacto