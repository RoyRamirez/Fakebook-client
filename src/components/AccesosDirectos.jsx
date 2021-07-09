import { Categoria } from "./Categoria"
import './style/Accesos.css';

export const AccesosDirectos = ({ accesos }) => {
  return (
    <div className="accesos">
        {accesos.map( (acceso) => (
          <Categoria key={acceso.id} categoria={acceso} />
        ))}
      </div>
  )
}
