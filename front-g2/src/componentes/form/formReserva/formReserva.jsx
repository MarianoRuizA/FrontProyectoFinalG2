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
        _id: reservaModificar._id,
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
        <Form.Group className="mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="por ejemplo, Juan Lopez"
            name="usuario"
            value={reserva.usuario}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={85}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Sucursal</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              label="Chacabuco 474"
              name="sucursal"
              value="Chacabuco 474"
              checked={reserva.sucursal === 'Chacabuco 474'}
              onChange={handleChange}
            />
            <Form.Check
              inline
              type="radio"
              label="San Martín 821"
              name="sucursal"
              value="San Martín 821"
              checked={reserva.sucursal === 'San Martín 821'}
              onChange={handleChange}
            />
            <Form.Check
              inline
              type="radio"
              label="Gral. Paz 576"
              name="sucursal"
              value="Gral. Paz 576"
              checked={reserva.sucursal === 'Gral. Paz 576'}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label>Servicio</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              label="Almuerzo"
              name="servicio"
              value="Almuerzo"
              checked={reserva.servicio === 'Almuerzo'}
              onChange={handleChange}
            />
            <Form.Check
              inline
              type="radio"
              label="Cena"
              name="servicio"
              value="Cena"
              checked={reserva.servicio === 'Cena'}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Label>Comensales</Form.Label>
          <Form.Control
            type="number"
            min={2}
            max={15}
            name="comensales"
            value={reserva.comensales}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group id="grupoFecha">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="datetime-local"
            name="fecha"
            value={reserva.fecha}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="divBoton">
          <Button type="submit" className="btn-danger">
            Guardar
          </Button>
        </div>
      </Form>
           
        </>
    )
}

export default FormReserva