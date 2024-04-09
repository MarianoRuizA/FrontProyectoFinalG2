import "./formRegistro.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const FormRegistro = () => {

  const [registroUsers, setRegistroUsers] = useState ({
    nombre: "",
    email: "",
    contraseña: "",
    admin: false
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("se hizo click en el boton")
  }

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <div>
          <div className="input-container">
            <FontAwesomeIcon className="icono" icon={faUser} />
            <input type="text"
            value={registroUsers.nombre}
            name="nombre"
            placeholder="Nombre" maxLength="70" />
          </div>

          <div className="input-container">
            <FontAwesomeIcon className="icono" icon={faEnvelope} />
            <input type="email" 
            value={registroUsers.email}
            name="email"
            placeholder="Email" maxLength="50" />
          </div>

          <div className="input-container">
            <FontAwesomeIcon className="icono" icon={faLock} />
            <input type="password" 
            value={registroUsers.contraseña}
            name="contraseña"
            placeholder="Contraseña" maxLength="50" />
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
