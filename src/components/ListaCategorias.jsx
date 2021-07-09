import { useState } from 'react';
import { Categoria } from './Categoria';
import './style/Categorias.css'
import { Boton } from './Boton';

export const ListaCategorias = ({ categorias }) => {
  const [texto, setTexto] = useState("Ver más");
  const [show, setShow] = useState(false);
  const [clase, setClase] = useState("");
  
  const verMas = () => {
    if(show){
      setTexto("Ver más");
      setClase("");
    }
    else {
      setTexto("Ver menos");
      setClase("show");
    }
    setShow(!show);
  }

  return (
    <div className={"contai " + clase}>
      <div className="categorias">
        {categorias.map( (categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
      <Boton btn="btn btn-md gray" onLog={verMas} texto={texto} /> 
    </div>
  )
}
