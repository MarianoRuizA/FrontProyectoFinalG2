import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { UsuariosContext } from "../../../context/ContextUsuarios";
import Swal from 'sweetalert2';
import "./formRegistro.css";

const FormRegistro = () => {

  const { createUsuario } = useContext(UsuariosContext);

  const [registroUsers, setRegistroUsers] = useState({ //guardar datos.
    id: uuidv4(),
    nombre: "",
    email: "",
    contrasenia: "",
    isAdmin: false,
    isSuspended: false
  });

  const handleSubmit = (e) => { //enviar datos actualizados.
    e.preventDefault();

    createUsuario(registroUsers);
    Swal.fire({ //validación, agregar siempre.
      title: "Registración Exitosa",
      text: "Usuario registrado con éxito",
      icon: "success",
      confirmButtonText: "Aceptar"
    }); //llamamos a la función (creada en el context) y le pasamos el estado creado en la linea 12.
    setRegistroUsers({
      id: uuidv4(),
      nombre: "",
      email: "",
      contrasenia: "",
      isAdmin: false,
      isSuspended: false
    });
  };

  const handleChange = (e) => { //recuperar datos del estado y capturar datos actualizados.
    setRegistroUsers({
      ...registroUsers,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <h2>Registro</h2>
          <div>
            <div className="input-container">
              <FontAwesomeIcon className="icono" icon={faUser} />
              <input type="text"
                value={registroUsers.nombre}
                name="nombre"
                onChange={handleChange}
                placeholder="Nombre" maxLength="85" required />
            </div>

            <div className="input-container">
              <FontAwesomeIcon className="icono" icon={faEnvelope} />
              <input type="email"
                value={registroUsers.email}
                name="email"
                onChange={handleChange}
                placeholder="Email" maxLength="60" required />
            </div>

            <div className="input-container">
              <FontAwesomeIcon className="icono" icon={faLock} />
              <input type="password"
                value={registroUsers.contrasenia}
                name="contrasenia"
                onChange={handleChange}
                placeholder="Contraseña" maxLength="30" required />
            </div>

            <a href="#">Términos y Condiciones</a>
            <input type="submit" className="btn" value="Registrarse" />
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
    </>
  );
};

export default FormRegistro;
