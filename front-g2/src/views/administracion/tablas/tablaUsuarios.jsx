import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleMinus, faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Table, Button } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { UsuarioProvider } from "../../../context/usuariosContext"
import Modal from 'react-bootstrap/Modal';
import FormRegistro from "../../registro/formRegistro"
import SwalDependiente from "../swal"


const TablaUsuarios = () => {

    const { usuarios, modificarUsuario } = useContext(UsuarioProvider)

    const [swal, setSwal] = useState(false)
    const [swal2, setSwal2] = useState(false)
    const [show, setShow] = useState(false)
    const [suspension, setSuspension] = useState(false)
    const [usuario, setUsuario] = useState(
        {
            id: "",
            nombre: "",
            email: "",
            contraseña: "",
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


    return (
        <>
            {swal && <SwalDependiente usuarioEliminar={usuario} setSwal={setSwal} setSwal2={setSwal2}/>}
            {swal2 && <SwalDependiente usuarioSuspender={usuario} pedido={suspension} setSwal={setSwal} setSwal2={setSwal2}/>}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormRegistro usuarioModificar={usuario} handleClose={handleClose} />
                </Modal.Body>

            </Modal>

            <Table hover striped bordered responsive className="tablaInfo">
                <thead>

                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>EMAIL</th>
                    <th>ESTADO</th>
                    <th>OPCIONES</th>
                </thead>
                <tbody>
                    {usuarios.map((item) =>
                    (
                        <>
                            <tr id="trUsuarios" className={item.isSuspended ? "filaSuspendida" : ""}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.email}</td>
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
                        </>
                    ))}

                </tbody>
            </Table>
        </>
    )
}

export default TablaUsuarios 