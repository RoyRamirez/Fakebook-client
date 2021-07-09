import { useState, useEffect } from "react";
import axios from "axios";
import { ListaCategorias } from "./ListaCategorias";
import { AccesosDirectos } from "./AccesosDirectos";
import './style/ListaAccesos.css';

export const ListaAccesos = () => {
  const [categorias, setCategorias] = useState([]);
  const [accesos, setAccesos] = useState([]);

  useEffect(() => {
    axios.get("https://fake-pi.herokuapp.com/categorias")
      .then(response => {
        setCategorias(response.data);
      }).catch (error => {
        console.log(error);
      });

    axios.get("https://fake-pi.herokuapp.com/accesos")
      .then(response =>{
        setAccesos(response.data);
      }).catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <div className="listaAccesos">
      <ListaCategorias categorias={categorias}/>
      <h3 className="accTitulo">Tus accesos directos</h3>
      <AccesosDirectos accesos={accesos}/>
    </div>
  )
}
