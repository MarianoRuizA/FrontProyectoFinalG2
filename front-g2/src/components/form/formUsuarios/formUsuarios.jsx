import { useState, useContext } from "react"
import { Form, FormLabel, Button } from "react-bootstrap"
import { UsuariosContext } from "../../../context/ContextUsuarios"
import "../formReserva/formReserva.css"

const FormUsuarios = ({usuarioModificar, handleClose}) =>
{
    const { modificarUsuario } = useContext(UsuariosContext)
    const [usuario, setUsuario] = useState(
        {
            id: usuarioModificar.id,
            nombre: usuarioModificar.nombre,
            email: usuarioModificar.email,
            contraseña: usuarioModificar.contraseña,
            isAdmin: usuarioModificar.isAdmin,
            isSuspended: usuarioModificar.isSuspended
        }
    )

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        modificarUsuario(usuario)
        handleClose()
        setUsuario({
            id: "",
            nombre: "",
            email: "",
            contraseña: "",
            isAdmin: false,
            isSuspended: false
        })

    }

    const handleChange = (e) =>
    {
        setUsuario({
            [e.target.name]: e.target.value
        }
        )
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <FormLabel>Nombre</FormLabel>
              <Form.Control
                type="text" placeholder="por ejemplo, Juan Lopez"
                name="nombre"
                value={usuario.nombre}
                onChange={handleChange} required minLength={3} maxLength={85}>
              </Form.Control>
            </Form.Group>
    
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="por ejemplo, juan@hotmail.com"
                name="email"
                value={usuario.email}
                onChange={handleChange} required>
              </Form.Control>
            </Form.Group>
    
            {
              <Form.Group className="mb-3 mt-3">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Administrador"
                  checked={usuario.isAdmin}
                  onChange={(e) => {
                    setUsuario({
                      ...usuario,
                      isAdmin: e.target.checked
                    });
                  }} />
              </Form.Group>
              
            }
    
            <Button type="submit" className='btn-danger'>Guardar</Button>
          </Form>
    )
}

export default FormUsuarios