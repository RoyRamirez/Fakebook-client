import { FaTh } from 'react-icons/fa';
import './style/Categoria.css';

export const Categoria = ({ categoria }) => {
  return (
    <a className="categoria" href="/">
      <FaTh className="catIcon"/> <p>{categoria.categoria}</p>
    </a>
  )
}
