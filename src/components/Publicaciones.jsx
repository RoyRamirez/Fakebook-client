import React from 'react'
import { Publicacion } from './Publicacion'

export const Publicaciones = ({ publicaciones, onLike }) => {
  return (
    <div className="publicaciones">
      {publicaciones.map( (publicacion) => (
        <Publicacion key={publicacion.id} onLike={onLike} publicacion={publicacion}/>
      ))}
    </div>
  )
}
