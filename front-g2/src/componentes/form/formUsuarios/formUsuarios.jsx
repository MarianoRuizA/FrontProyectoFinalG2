import { useState, useContext } from "react"
import { Form, FormLabel, Button } from "react-bootstrap"
import { UsuariosContext } from "../../../context/ContextUsuarios"
import "../formReserva/formReserva.css"
import Swal from "sweetalert2"

const FormUsuarios = ({ usuarioModificar, handleClose, cantAdmins }) => {
    const { modificarUsuario } = useContext(UsuariosContext)
    const [usuario, setUsuario] = useState(
        {
            _id: usuarioModificar._id,
            nombre: usuarioModificar.nombre,
            apellido: usuarioModificar.apellido,
            email: usuarioModificar.email,
            contrasenia: usuarioModificar.contrasenia,
            isAdmin: usuarioModificar.isAdmin,
            isSuspended: usuarioModificar.isSuspended
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        const cambiosRealizados = Object.keys(usuario).some(key => usuario[key] !== usuarioModificar[key]);
        if (cambiosRealizados) {
            modificarUsuario(usuario)
            Swal.fire({
                title: "Usuario modificado",
                icon: "success"
            })
        } else {
            Swal.fire({
                title: "Ningún cambio realizado",
                icon: "question"
            })
        }
        handleClose()
        setUsuario({
            _id: "",
            nombre: "",
            apellido: "",
            email: "",
            contrasenia: "",
            isAdmin: false,
            isSuspended: false
        })

    }

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        }
        )
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <FormLabel>Nombre</FormLabel>
                <Form.Control
                    type="text" placeholder="por ejemplo, Juan"
                    name="nombre"
                    value={usuario.nombre}
                    onChange={handleChange} required minLength={3} maxLength={85}>
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" >
                <FormLabel>Apellido</FormLabel>
                <Form.Control
                    type="text" placeholder="por ejemplo, Lopez"
                    name="apellido"
                    value={usuario.apellido}
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

            
                <Form.Group className="mb-3 mt-3">
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Administrador"
                        checked={usuario.isAdmin}
                        disabled={usuario.isAdmin && cantAdmins==1}
                        onChange={(e) => {
                            setUsuario({
                                ...usuario,
                                isAdmin: e.target.checked
                            });
                        }} />
                </Form.Group>

            

            <div className="divBoton">

                <Button type="submit" className='btn-danger'>Guardar</Button>
            </div>
        </Form>
    )
}

export default FormUsuarios