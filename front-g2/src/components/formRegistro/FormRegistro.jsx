import "./formRegistro.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FormRegistro = () => {
  return (
    <div className="form-content">
      <form>
        <h2>Registro</h2>
        <div>
          <div className="input-container">
            <FontAwesomeIcon className="icono" icon={faUser} />
            <input type="text" placeholder="Nombre" maxLength="70" />
          </div>

          <div className="input-container">
            <FontAwesomeIcon className="icono" icon={faEnvelope} />
            <input type="email" placeholder="Email" maxLength="50" />
          </div>

          <div className="input-container">
            <FontAwesomeIcon className="icono" icon={faLock} />
            <input type="password" placeholder="Contraseña" maxLength="50" />
          </div>

          <a href="#">Termínos y Condiciones</a>
          <input type="submit" className="btn" value="registrate" />
        </div>
      </form>
      <div className="text">
        <h2>Bienvenido</h2>
        <p>
          En Tango, estamos encantados de recibirte en nuestro rincón gastronómico lleno de pasión y sabor.
          Regístrate y únete a nuestra familia culinaria para vivir experiencias inolvidables juntos.
          ¡Esperamos ansiosos tu visita!
        </p>
      </div>
    </div>
  )
}

export default FormRegistro
