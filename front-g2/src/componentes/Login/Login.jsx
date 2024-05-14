import { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { UsuariosContext } from '../../context/ContextUsuarios';
import Swal from "sweetalert2";
import './Login.css'

const Login = ({ handleClose }) => {

  const [email, setEmail] = useState("")
  const [contrasenia, setContraseña] = useState("")

  const { loginUser, usuarioLogueado } = useContext(UsuariosContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ email, contrasenia });
      if (usuarioLogueado) {
        Swal.fire({
          title: "Bienvenido",
          text: "Inicio de sesión exitoso",
          icon: "success",
          confirmButtonText: "Aceptar",
          timer: 2000,
          customClass: {
            confirmButton: 'confirm-button-class',
            title: 'title-class',
            icon: 'icon-class',
            htmlContainer: 'custom-container'
          }
        });
        localStorage.setItem("user", JSON.stringify(usuarioLogueado));
        handleClose();

        if (usuarioLogueado.isAdmin) {
          await new Promise(resolve => setTimeout(resolve, 2150));
          window.location.href = "/admin"
        }
  
      } else {
        Swal.fire({
          title: "Error",
          text: "Usuario o contraseña incorrectos",
          icon: "error",
          confirmButtonText: "Aceptar",
          timer: 2000,
          customClass: {
            confirmButton: 'confirm-button-class',
            title: 'title-class',
            icon: 'icon-class',
            htmlContainer: 'custom-container'
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit} className='form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><p className='text-email'>Email</p></Form.Label>
        <Form.Control className='input-form'
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><p className='text-contraseña'>Contraseña</p></Form.Label>
        <Form.Control className='input-form'
          type="password"
          value={contrasenia}
          onChange={(e) => setContraseña(e.target.value)}
          name="contraseña"
          placeholder="Contraseña" />
      </Form.Group>

      <Button variant="primary" type="submit" className='btn-ingresar'>
        Ingresar
      </Button>
    </Form>
  )
}

export default Login