import { Form, FormLabel, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import "./formReserva.css"
import { ReservasContext } from "../../../context/ContextReservas";
import Swal from "sweetalert2";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from "dayjs";


const FormReserva = ({ reservaModificar, handleClose }) => {

    const { modificarReserva } = useContext(ReservasContext)

    const [reserva, setReserva] = useState({
        id: reservaModificar.id,
        usuario: reservaModificar.usuario,
        email: reservaModificar.email,
        sucursal: reservaModificar.sucursal,
        servicio: reservaModificar.servicio,
        comensales: reservaModificar.comensales,
        fecha: reservaModificar.fecha

    })

    const [maxHora, setMaxHora] = useState(new Date())


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

    const handleFecha = (fechaInput) => {
        setReserva({
            ...reserva,
            fecha: fechaInput
        })
    }

    const fechaHoy = new Date()
    const fechaMaxima = new Date()
    fechaMaxima.setMonth(fechaHoy.getMonth() + 2)

    const minHora = new Date()
    minHora.setHours(12, 0, 0)


    useEffect(() => {
        const hora = new Date(maxHora)
        const diaSeleccionado = dayjs(reserva.fecha).day();
        if(dayjs(reserva.fecha).day() == 0)
        {
            hora.setHours(16, 0, 0)
        }else{
            hora.setHours(23, 0, 0)
        }
        setMaxHora(hora)
    }, [reserva.fecha])




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
                        <option value="24 de septiembre y Congreso">24 de septiembre y Congreso</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Servicio</Form.Label>
                    <Form.Select aria-label="Default select example" name="sucursal"
                        value={reserva.servicio}
                        onChange={handleChange}>
                        <option value="Almuerzo">Almuerzo</option>
                        <option value="Cena">Cena</option>
                    </Form.Select>
                </Form.Group>


                <Form.Group>
                    <Form.Label>Comensales</Form.Label>
                    <Form.Control type="number" min={2} max={15}
                        name="comensales"
                        value={reserva.comensales}
                        onChange={handleChange} required>
                    </Form.Control>
                </Form.Group>
                <Form.Group id="grupoFecha">
                    <Form.Label>Fecha</Form.Label>
                    <DateTimePicker
                        format="YYYY-MM-DD HH:MM:ss"
                        name="fecha"
                        value={dayjs(reserva.fecha)}
                        onChange={handleFecha}
                        minDate={dayjs(fechaHoy)}
                        maxDate={dayjs(fechaMaxima)}
                        minTime={dayjs(minHora)}
                        maxTime={dayjs(maxHora)} 
                        minutesStep={60}/>
                </Form.Group>


                <div className="divBoton">
                    <Button type="submit" className="btn-danger">Guardar</Button>
                </div>
            </Form>
        </>
    )
}

export default FormReserva