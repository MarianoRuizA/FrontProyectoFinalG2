import { Form, FormLabel, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import "./formReserva.css"
import { ReservasContext } from "../../../context/ContextReservas";
import Swal from "sweetalert2";

const FormReserva = ({ reservaModificar, handleClose }) => {

    const { modificarReserva } = useContext(ReservasContext)

    const [reserva, setReserva] = useState({
        id: reservaModificar.id,
        usuario: reservaModificar.usuario,
        email: reservaModificar.email,
        sucursal: reservaModificar.sucursal,
        comensales: reservaModificar.comensales,
        fecha: reservaModificar.fecha,
        hora: reservaModificar.hora
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const cambiosRealizados = Object.keys(reserva).some(key => reserva[key] !== reservaModificar[key]);
        if (cambiosRealizados) {
            modificarReserva(reserva)
            Swal.fire({
                title: "Reserva modificada",
                icon: "success"
            })  
        } else {
            Swal.fire({
                title: "Ningún cambio realizado",
                icon: "question"
            })
        }
        handleClose()
    }


    const handleChange = (e) => {
        setReserva({
            ...reserva,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <FormLabel>Usuario</FormLabel>
                    <Form.Control
                        type="text" placeholder="por ejemplo, Juan Lopez"
                        name="usuario"
                        value={reserva.usuario}
                        onChange={handleChange} required minLength={3} maxLength={85}>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Sucursal</Form.Label>
                    <Form.Select aria-label="Default select example" name="sucursal"
                        value={reserva.sucursal}
                        onChange={handleChange}>
                        <option value="Chacabuco 474">Chacabuco 474</option>
                        <option value="San Martín 821">San Martín 821</option>
                        <option value="Crisóstomo Álvarez y Buenos Aires">Crisóstomo Álvarez y Buenos Aires</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Comensales</Form.Label>
                    <Form.Control type="number" min={2} max={10}
                        name="comensales"
                        value={reserva.comensales}
                        onChange={handleChange} required>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date"
                        name="fecha"
                        value={reserva.fecha}
                        onChange={handleChange} required>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="text"
                        name="fecha"
                        value={reserva.fecha}
                        onChange={handleChange} required>
                    </Form.Control>
                </Form.Group>

                <Button type="submit" className="btn-danger">Guardar</Button>
            </Form>
        </>
    )
}

export default FormReserva