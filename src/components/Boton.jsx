import './style/Boton.css';

export const Boton = ({ btn, texto, onLog, icon}) => {
  return (
    <button href="#" className={btn} onClick={onLog} > {icon} <strong>{texto}</strong></button>
  )
}
