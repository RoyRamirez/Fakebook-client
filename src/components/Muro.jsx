import { useState, useEffect } from 'react';
import { Publicaciones } from './Publicaciones';
import { InsertarPubli } from './InsertarPubli';
import './style/Muro.css';
import axios from 'axios';

export const Muro = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    axios.get('https://fake-pi.herokuapp.com/publicaciones')
    .then(response => {
      setPublicaciones(response.data);
    }).catch(error => {
      console.log(error);
    });
  },[])

  const onLike = (liked, publicacion) => {
    if(liked) 
      publicacion.likes += 1;
    else 
      publicacion.likes -= 1;
    axios.put('https://fake-pi.herokuapp.com/publicaciones', publicacion);
  }

  return (
    <div className="muro">
      <InsertarPubli />
      <Publicaciones publicaciones={publicaciones} onLike={onLike} />
    </div>
  )
}
