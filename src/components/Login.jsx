import { useRef, useEffect } from 'react';
import './style/Login.css';
import { Boton } from './Boton';

export const Login = ({ login }) => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const onLog = (e) =>{
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    login(user);
    emailRef.current.value = null;
    passwordRef.current.value = null;
  }

  return (
    <div className="login">
      <div className="titulo">
        <h1 className="logo">fakebook</h1>
        <h2 className="subtitulo">Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</h2>
      </div>
      <div className="loginbox">
        <form action="" className="form">
          <input type="text" placeholder="Correo electrónico o número de teléfono" className="input" ref={emailRef}/>
          <input type="password" placeholder="Contraseña" className="input" ref={passwordRef} />
          <Boton btn="btn blue" texto="Iniciar sesión" onLog={onLog}/>
          <a href="" className="olviPass">¿Olvidaste tu contraseña?</a>
          <Boton btn="btn btn-md green" texto="Crear cuenta nueva"/>
        </form>
      </div>
    </div>
  )
}
