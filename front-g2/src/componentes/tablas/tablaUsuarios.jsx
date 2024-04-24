import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleMinus, faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Table } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { UsuariosContext } from "../../context/ContextUsuarios"
import Modal from 'react-bootstrap/Modal';
import SwalDependiente from "../../views/administracion/swal/swal"
import FormUsuarios from "../form/formUsuarios/formUsuarios"

const TablaUsuarios = () => {

    const { usuarios } = useContext(UsuariosContext)

    const [admins, setAdmins] = useState(0)
    const [swal, setSwal] = useState(false)
    const [swal2, setSwal2] = useState(false)
    const [show, setShow] = useState(false)
    const [suspension, setSuspension] = useState(false)
    const [usuario, setUsuario] = useState(
        {
            _id: "",
            nombre: "",
            apellido: "",
            email: "",
            contrasenia: "",
            isAdmin: false,
            isSuspended: false
        }
    )

    const handleOpen = (item) => {
        setUsuario(item)
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleEliminar = (item) => {
        setUsuario(item)
        setSwal(true)
    }

    const handleSuspension = (item) => {
        setSuspension(!item.isSuspended)
        setUsuario(item)
        setSwal2(true)
    }

    useEffect(() => {
        const cantAdmin = usuarios.filter(persona => persona.isAdmin).length
        setAdmins(cantAdmin)
    }, [usuarios])

    return (
        <>
            {swal && <SwalDependiente usuarioEliminar={usuario} setSwal={setSwal} setSwal2={setSwal2} cantAdmins={admins} />}
            {swal2 && <SwalDependiente usuarioSuspender={usuario} pedido={suspension} setSwal={setSwal} setSwal2={setSwal2} />}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormUsuarios usuarioModificar={usuario} handleClose={handleClose} cantAdmins={admins} />
                </Modal.Body>

            </Modal>

            {usuarios.length === 0 ?
                (<h3>No hay usuarios para mostrar</h3>) :
                (
                    <Table hover striped bordered responsive className="tablaInfo">
                        <thead>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>APELLIDO</th>
                            <th>EMAIL</th>
                            <th>CARGO</th>
                            <th>ESTADO</th>
                            <th>OPCIONES</th>
                        </thead>
                        <tbody>
                            {usuarios.map((item, index) =>
                            (

                                <tr id="trUsuarios" className={item.isSuspended ? "filaSuspendida" : ""} key={index}>
                                    <td>{item._id}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido}</td>
                                    <td>{item.email}</td>
                                    <td>{item.isAdmin ? "Administrador" : "Usuario"}</td>
                                    <td>{item.isSuspended ? "Suspendido" : "Activo"}</td>
                                    <td id="tdIconos">
                                        <div>

                                            <a onClick={() => { handleOpen(item) }}>
                                                <FontAwesomeIcon icon={faPencilSquare} className="iconEditar" />
                                            </a>

                                            <a onClick={() => { handleSuspension(item) }}>

                                                <FontAwesomeIcon icon={faCircleMinus} className="iconSuspender" />
                                            </a>
                                            <a onClick={() => { handleEliminar(item) }}>

                                                <FontAwesomeIcon icon={faTrash} className="iconEliminar" />
                                            </a>
                                        </div>
                                    </td>
                                </tr>

                            ))}

                        </tbody>
                    </Table>
                )
            }
        </>
    )
}

export default TablaUsuarios 