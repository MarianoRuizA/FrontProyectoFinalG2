import { Table, Modal } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useContext, useState } from "react"
import { ReservasContext } from "../../context/ContextReservas"
import FormReserva from "../form/formReserva/formReserva"

const TablaReservas = () => {
    const { reservas } = useContext(ReservasContext)

    const [reserva, setReserva] = useState()
    const [show, setShow] = useState(false)

    const handleShow = (item) =>
    {
        setReserva(item)
        setShow(true)
    }

    const handleClose = () =>
    {
        setShow(false)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <FormReserva reservaModificar={reserva} handleClose={handleClose}/>
                </Modal.Body>
            </Modal>
            {reservas.length === 0 ? (<h3>No hay reservas para mostrar</h3>) : (

                <Table hover striped bordered responsive className="tablaInfo">
                    <thead>

                        <th>ID</th>
                        <th>USUARIO</th>
                        <th>SUCURSAL</th>
                        <th>COMENSALES</th>
                        <th>FECHA</th>
                        <th>HORA</th>
                        <th>OPCIONES</th>
                    </thead>
                    <tbody>
                        {reservas.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.usuario}</td>
                                <td>{item.sucursal}</td>
                                <td>{item.comensales}</td>
                                <td>{item.fecha}</td>
                                <td>{item.hora}</td>
                                <td id="tdIconos">
                                    <div>
                                        <a onClick={()=>{handleShow(item)}}>
                                        <FontAwesomeIcon icon={faPencilSquare} className="iconEditar" />
                                        </a>

                                        <FontAwesomeIcon icon={faTrash} className="iconEliminar" />
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            )}

        </>
    )
}

export default TablaReservas