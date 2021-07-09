import { FotoUsuario } from './FotoUsuario';
import image from '../img/user.png';
import  './style/Contacto.css';

export const Contacto = ({ contacto }) => {
  return (
    <div className="contacto">
      <FotoUsuario src={image}/>
      <h3 className="nombreContacto">{contacto.usuario}</h3>
    </div>
  )
}
