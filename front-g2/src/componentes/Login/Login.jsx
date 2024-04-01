import { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { UsuariosProvider } from '../../context/UsuariosContext';
import Swal from "sweetalert2";

const Login = ({handleClose}) => {

  const [email, setEmail] = useState("")
  const [contraseña, setContraseña] = useState("")

  const { usuarios } = useContext(UsuariosProvider);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const user = usuarios.find(
        (user) => user.email === email && user.contraseña === contraseña
      );
      if (user) {
        Swal.fire({
          title: "Bienvenido",
          text: "Inicio de sesión exitoso",
          icon: "success",
          confirmButtonText: "Aceptar",
          timer: 1500,
        });
        localStorage.setItem("user", JSON.stringify(user));
        // navigate("/"); 
        handleClose();
      } else {
        Swal.fire({
          title: "Error",
          text: "Usuario o contraseña incorrectos",
          icon: "error",
          confirmButtonText: "Aceptar",
          timer: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            name="contraseña"
            placeholder="Contraseña" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordarme" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
  )
}

export default Login