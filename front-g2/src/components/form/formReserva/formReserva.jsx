import { Form, FormLabel, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const FormReserva = ({ reservaModificar, handleClose }) => {

    const [reserva, setReserva] = useState({
        id: reservaModificar.id,
        usuario: reservaModificar.usuario,
        email: reservaModificar.email,
        sucursal: reservaModificar.sucursal,
        comensales: reservaModificar.comensales,
        fecha: reservaModificar.fecha,
        hora: reservaModificar.hora
    })




    const handleChange = (e) => {
        setReserva({
            ...reserva,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <Form>
                <Form.Group className="mb-3" >
                    <FormLabel>Usuario</FormLabel>
                    <Form.Control
                        type="text" placeholder="por ejemplo, Juan Lopez"
                        name="nombre"
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
                    <Form.Control type="number" minLength={1} maxLength={10}
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

                <Button type="submit" className="btn-danger">Guardar</Button>
            </Form>
        </>
    )
}

export default FormReserva