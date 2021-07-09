import { FaPlayCircle, FaPhotoVideo } from 'react-icons/fa';
import { Boton } from './Boton';
import { FotoUsuario } from './FotoUsuario';
import imagn from '../img/foto.jpg';
import './style/InsertarPubli.css';

export const InsertarPubli = () => {
  return (
    <div className="insertar">
      <div className="insertInfo">
        <FotoUsuario src={imagn} />
        <input type="text" className="publiText" placeholder="¿Qué estás pensando?" />
      </div>
      <div className="btnss">
        <Boton btn="btn btn-int" texto="Video en vivo" icon={<FaPlayCircle />}/>
        <Boton btn="btn btn-int" texto="Foto/Video" icon={<FaPhotoVideo />}/>
      </div>
    </div>
  )
}
