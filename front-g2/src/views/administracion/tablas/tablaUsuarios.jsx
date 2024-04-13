import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleMinus, faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Table, Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { UsuarioProvider } from "../../../context/usuariosContext"
import Modal from 'react-bootstrap/Modal';
import FormRegistro from "../../registro/formRegistro"
import SwalDependiente from "../swal"


const TablaUsuarios = () => {
    const [swal, setSwal] = useState(false)
    const [show, setShow] = useState(false)
    const [usuario, setUsuario] = useState(
        {
            id: "",
            nombre: "",
            email: ""
        }
    )
    const { usuarios } = useContext(UsuarioProvider)

    const handleOpen = (item) =>
    {
        setUsuario(item)
        setShow(true)
    }
    const handleClose = () =>
    {
        setShow(false)
    }
    const handleSwal = (item) =>
    {
        setUsuario(item)
        setSwal(true)
    }
    return (
        <>
        {swal && <SwalDependiente usuarioEliminar={usuario} />}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormRegistro  usuarioModificar={usuario} handleClose={handleClose} />
                </Modal.Body>
                
            </Modal>

            <Table hover striped bordered responsive className="tablaInfo">
                <thead>

                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>EMAIL</th>
                    <th>OPCIONES</th>
                </thead>
                <tbody>
                    {usuarios.map((item) =>
                    (
                        
                        <>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.email}</td>
                                <td className="d-flex justify-content-around p-3">
                                    <a onClick={()=>{handleOpen(item)}}>
                                        <FontAwesomeIcon icon={faPencilSquare} className="iconEditar" />
                                    </a>

                                    <a href="">

                                        <FontAwesomeIcon icon={faCircleMinus} className="iconSuspender" />
                                    </a>
                                    <a onClick={()=>{handleSwal(item)}}>

                                        <FontAwesomeIcon icon={faTrash} className="iconEliminar" />
                                    </a>
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