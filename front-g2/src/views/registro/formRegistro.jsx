import { useContext, useState } from "react"
import { Button, Form, FormLabel } from "react-bootstrap"
import { UsuarioProvider } from "../../context/usuariosContext"


const FormRegistro = ({ usuarioModificar, handleClose }) => {

    const {modificarUsuario} = useContext(UsuarioProvider)

    const [usuario, setUsuario] = useState(
        {
            id: usuarioModificar ? usuarioModificar.id : "",
            nombre: usuarioModificar ? usuarioModificar.nombre : "",
            email: usuarioModificar ? usuarioModificar.email : "",
            contraseña: usuarioModificar ? usuarioModificar.contraseña : "",
            isAdmin: usuarioModificar ? usuarioModificar.isAdmin : false,
            isSuspended: usuarioModificar ? usuarioModificar.isSuspended : false
        }
    )

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (usuarioModificar) {
            modificarUsuario(usuario)
            handleClose()
        } else {
            agregarUsuario(usuario)
            setUsuario(
                {
                    id: "",
                    nombre: "",
                    email: "",
                    contraseña: "",
                    isAdmin: false,
                    isSuspended: false
                }
            )
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <FormLabel>Nombre</FormLabel>
                <Form.Control
                    type="text" placeholder="por ejemplo, Juan Lopez"
                    name="nombre"
                    value={usuario.nombre}
                    onChange={handleChange}>
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="por ejemplo, juan@hotmail.com"
                    name="email"
                    value={usuario.email}
                    onChange={handleChange}>
                </Form.Control>
            </Form.Group>

            {
                usuarioModificar ? (<Form.Group className="mb-3 mt-3">
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Administrador"
                        checked=  {usuario.isAdmin}        
                        onChange={(e) => {
                            setUsuario(prevUsuario => ({
                              ...prevUsuario,
                              isAdmin: e.target.checked
                            }));
                          }}/>
                </Form.Group>
                ) : null
            }

<Button type="submit">Guardar</Button>
        </Form>
    )
}

export default FormRegistro