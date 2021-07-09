import React, { Fragment, useState, } from 'react';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Muro } from './components/Muro';
import { Menu } from './components/Menu';
import { ListaContactos } from './components/ListaContactos';
import { ListaAccesos } from './components/ListaAccesos';
import axios from 'axios';
import './App.css';

export function App() {
  const [sesion, setSesion] = useState({
    email: '',
    password: '',
    activo: false
  });

  const login = (user) => {
    console.log(user);
    axios.get('https://fake-pi.herokuapp.com/users', {params: {email: user.email, password: user.password}})
    .then(response => {
      setSesion({
        email: user.email,
        password: user.password,
        activo: true
      })
    }).catch(error => {
      alert("Datos no validos");
      console.log(error);
    });
  }

  return (
    <Fragment>
      <div className="container">
        {sesion.activo && <Menu />}
        {sesion.activo && <div className="cont">
          <ListaAccesos />
          <Muro />
          <ListaContactos />
        </div>}
        {!sesion.activo && <Login login={login}/>}
        <Footer />
      </div>
    </Fragment>    
  );
}
