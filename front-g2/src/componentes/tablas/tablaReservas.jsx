import { Table, Modal } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useContext, useState } from "react"
import { ReservasContext } from "../../context/ContextReservas"
import SwalDependiente2 from "../../views/administracion/eliminarReserva/eliminarReserva"
import FormReserva from "../form/formReserva/formReserva"

const TablaReservas = () => {
    const { reservas } = useContext(ReservasContext)

    const [reserva, setReserva] = useState()
    const [show, setShow] = useState(false)
    const [swal, setSwal] = useState(false)

    const handleShow = (item) => {
        setReserva(item)
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleSwal = (item) => {
        setSwal(true)
        setReserva(item)
    }

    return (
        <>
            {swal && <SwalDependiente2 reservaEliminar={reserva} setSwal={setSwal} />}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormReserva reservaModificar={reserva} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
            {reservas.length === 0 ? (<h3>No hay reservas para mostrar</h3>) : (

                <Table hover striped bordered responsive className="tablaInfo">
                    <thead>

                        <th>ID</th>
                        <th>USUARIO</th>
                        <th>SUCURSAL</th>
                        <th>SERVICIO</th>
                        <th>COMENSALES</th>
                        <th>FECHA</th>
                        <th>HORA</th>
                        <th>OPCIONES</th>
                    </thead>
                    <tbody>
                        {reservas.map((item, index) => {
                           
                            const fecha = new Date(item.fecha)
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.usuario}</td>
                                    <td>{item.sucursal}</td>
                                    <td>{item.servicio}</td>
                                    <td>{item.comensales}</td>
                                   
                                    <td>
                                        {fecha.toLocaleDateString()}
                                    </td>
                                    <td>
                                    {fecha.toLocaleTimeString()}
                                    </td>
                                    <td id="tdIconos">
                                        <div>
                                            <a onClick={() => { handleShow(item) }}>
                                                <FontAwesomeIcon icon={faPencilSquare} className="iconEditar" />
                                            </a>

                                            <a onClick={() => { handleSwal(item) }}>
                                                <FontAwesomeIcon icon={faTrash} className="iconEliminar" />
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
            )}

        </>
    )
}

export default TablaReservas