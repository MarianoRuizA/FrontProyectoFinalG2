import "./formRegistro.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid"
import { UsuariosContext } from "../../context/ContextUsuarios";
import Swal from 'sweetalert2'

const FormRegistro = () => {

  const {createUsuario} = useContext(UsuariosContext)

  const [registroUsers, setRegistroUsers] = useState ({ //guardar datos.
    id: uuidv4(),
    nombre: "",
    email: "",
    contraseña: "",
    admin: false
  })
  console.log(registroUsers, "datos en cero desde el form")

  const handleSubmit = (e) => { //enviar datos actualizados.
    e.preventDefault();
    createUsuario(registroUsers); //llamamos a la funcion (creada en el context) y le pasamos el estado creado en la linea 12.
    Swal.fire({ //validación, agregar siempre.
      title: "Registración Exitosa",
      text: "Usuario registrado con exito",
      icon: "success",
      confirmButtonText: "Aceptar"
    })
    setRegistroUsers ({
      id: uuidv4(), 
      nombre:"",
      apellido:"",
      email:"",
      admin: false
    })
  }

  const handleChange = (e) =>{ //recuperar datos del estado y capturar datos actualizados.
    setRegistroUsers({
      ...registroUsers,
      [e.target.name]: e.target.value
    })
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
            onChange={handleChange}
            placeholder="Nombre" maxLength="70" />
          </div>

          <div className="input-container">
            <FontAwesomeIcon className="icono" icon={faEnvelope} />
            <input type="email" 
            value={registroUsers.email}
            name="email"
            onChange={handleChange}
            placeholder="Email" maxLength="50" />
          </div>

          <div className="input-container">
            <FontAwesomeIcon className="icono" icon={faLock} />
            <input type="password" 
            value={registroUsers.contraseña}
            name="contraseña"
            onChange={handleChange}
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
