import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleMinus, faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { Table, Button } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { UsuarioProvider } from "../../../context/usuariosContext"
import Modal from 'react-bootstrap/Modal';
import FormRegistro from "../../registro/formRegistro"
import SwalDependiente from "../swal"


const TablaUsuarios = () => {
    const [swal, setSwal] = useState(false)
    const [swal2, setSwal2] = useState(false)
    const [show, setShow] = useState(false)
    const [suspension, setSuspension] = useState(false)
    const [usuario, setUsuario] = useState(
        {
            id: "",
            nombre: "",
            email: "",
            isSuspended: false
        }
    )
    const { usuarios, modificarUsuario } = useContext(UsuarioProvider)

    const handleOpen = (item) =>
    {
        setUsuario(item)
        setShow(true)
    }
    const handleClose = () =>
    {
        setShow(false)
    }
    const handleEliminar = (item) =>
    {
        setUsuario(item)
        setSwal(true)
    }
    const handleSuspension = (item) =>
    {
        (item.isSuspended)?setSuspension(false):setSuspension(true)
        item.isSuspended = suspension
        setUsuario(item)
        console.log("se suspendió", usuario)
        setSwal2(true)
    }

    useEffect(()=>{
        let fila = document.getElementById("trUsuarios")
        if (suspension) {
            fila.style.backgroundColor = "red"
        }
    }, [suspension])
    return (
        <>
        {swal && <SwalDependiente usuarioEliminar={usuario} />}
        {swal2 && <SwalDependiente usuarioSuspender={usuario}/>}

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
                            <tr id="trUsuarios">
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.email}</td>
                                <td className="d-flex justify-content-evenly p-3">
                                    <a onClick={()=>{handleOpen(item)}}>
                                        <FontAwesomeIcon icon={faPencilSquare} className="iconEditar" />
                                    </a>

                                    <a onClick={()=>{handleSuspension(item)}}>

                                        <FontAwesomeIcon icon={faCircleMinus} className="iconSuspender" />
                                    </a>
                                    <a onClick={()=>{handleEliminar(item)}}>

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