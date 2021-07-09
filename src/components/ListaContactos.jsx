import { useEffect, useState } from 'react';
import { Contacto } from './Contacto';
import axios from 'axios';
import './style/ListaContactos.css';

export const ListaContactos = () => {
  const [contactos, setContactos] = useState([]);
  
  useEffect(() => {
    axios.get('/contactos')
    .then(response => {
      setContactos(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, [])

  return (
    <div className="contactos">
      <h3>Contactos</h3>
      {contactos.map( (contacto) => (
        <Contacto key={contacto.id} contacto={contacto}/>
      ))}
    </div>
  )
}
