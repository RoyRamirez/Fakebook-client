import { useState } from "react";
import { FaGlobeAmericas, FaComment, FaShare, FaThumbsUp } from "react-icons/fa";
import { Boton } from './Boton';
import { FotoUsuario } from './FotoUsuario';
import imag from '../img/foto.jpg';
import './style/Publicacion.css';

export const Publicacion = ({ publicacion, onLike }) => {
  const [liked, setLiekd] = useState("");

  const like = () => {
    if(liked === ""){
      setLiekd("like");
      onLike(true, publicacion);
    }
    else {
      setLiekd("");
      onLike(false, publicacion);
    }
  }

  return (
    <div className="publicacion">
      <div className="publInfo">
        <FotoUsuario src={imag} />
        <div className="inf">
          <h5 className="publiUsuario">{publicacion.usuario}</h5>
          <span className="fecha">10 de abril <FaGlobeAmericas /></span>
        </div>
      </div>
      <p className="texto">{publicacion.texto}</p>
      <div className="interacciones">
        <h5 className="interaccion">{publicacion.likes} likes</h5>
        <h5 className="interaccion">{publicacion.comentarios} comentarios</h5>
        <h5 className="interaccion">{publicacion.compartidas} compartidas</h5>
      </div>
      <div className="btns">
        <Boton btn={"btn btn-int " + liked} texto="Me gusta" onLog={like} icon={<FaThumbsUp/>}/>
        <Boton btn="btn btn-int" texto="Comentar" icon={<FaComment />}/>
        <Boton btn="btn btn-int" texto="Compartir" icon={<FaShare />}/>
      </div>
    </div>
  )
}
