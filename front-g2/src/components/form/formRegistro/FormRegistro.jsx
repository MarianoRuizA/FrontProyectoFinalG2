 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from "react";
import { Form, FormLabel, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from "uuid";
import { UsuariosContext } from "../../../context/ContextUsuarios";
import Swal from 'sweetalert2'

const FormRegistro = ({usuarioModificar, handleClose}) => {

  const { createUsuario, modificarUsuario } = useContext(UsuariosContext)

  const [registroUsers, setRegistroUsers] = useState({ //guardar datos.
    id: usuarioModificar ? usuarioModificar.id : uuidv4(),
    nombre: usuarioModificar ? usuarioModificar.nombre : "",
    email: usuarioModificar ? usuarioModificar.email : "",
    contraseña: usuarioModificar ? usuarioModificar.contraseña : "",
    isAdmin: usuarioModificar ? usuarioModificar.isAdmin : false,
    isSuspended: usuarioModificar ? usuarioModificar.isSuspended : false
  })
  
  const handleSubmit = (e) => { //enviar datos actualizados.
    e.preventDefault();
    if (usuarioModificar) {
      modificarUsuario(registroUsers)
      handleClose()
    }else{
      createUsuario(registroUsers)
      Swal.fire({ //validación, agregar siempre.
        title: "Registración Exitosa",
        text: "Usuario registrado con exito",
        icon: "success",
        confirmButtonText: "Aceptar"
      }) //llamamos a la funcion (creada en el context) y le pasamos el estado creado en la linea 12.
    }
    setRegistroUsers({
      id: uuidv4(),
      nombre: "",
      email: "",
      contraseña: "",
      isAdmin: false,
      isSuspended: false
    })
  }

  const handleChange = (e) => { //recuperar datos del estado y capturar datos actualizados.
    setRegistroUsers({
      ...registroUsers,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
     {usuarioModificar? (<Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <FormLabel>Nombre</FormLabel>
                <Form.Control
                    type="text" placeholder="por ejemplo, Juan Lopez"
                    name="nombre"
                    value={registroUsers.nombre}
                    onChange={handleChange} required minLength={3} maxLength={85}>
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="por ejemplo, juan@hotmail.com"
                    name="email"
                    value={registroUsers.email}
                    onChange={handleChange} required>
                </Form.Control>
            </Form.Group>

            {
                usuarioModificar ? (<Form.Group className="mb-3 mt-3">
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Administrador"
                        checked={registroUsers.isAdmin}
                        onChange={(e) => {
                            setRegistroUsers(prevUsuario => ({
                                ...prevUsuario,
                                isAdmin: e.target.checked
                            }));
                        }} />
                </Form.Group>
                ) : null
            }

            <Button type="submit">Guardar</Button>
        </Form>):(
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
              placeholder="Nombre" maxLength="85" required/>
          </div>

          <div className="input-container">
            <FontAwesomeIcon className="icono" icon={faEnvelope} />
            <input type="email"
              value={registroUsers.email}
              name="email"
              onChange={handleChange}
              placeholder="Email" maxLength="60" required/>
          </div>

          <div className="input-container">
            <FontAwesomeIcon className="icono" icon={faLock} />
            <input type="password"
              value={registroUsers.contraseña}
              name="contraseña"
              onChange={handleChange}
              placeholder="Contraseña" maxLength="30" required/>
          </div>

          <a href="#">Términos y Condiciones</a>
          <input type="submit" className="btn" value="registrate"/>
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
  )}
    </>
  )
}

export default FormRegistro
