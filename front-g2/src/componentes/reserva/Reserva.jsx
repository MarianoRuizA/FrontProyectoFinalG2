


 




import React, { useState, useEffect, useContext } from 'react'
import './reserva.css'
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Fecha from '../fecha/Fecha.jsx';
import Swal from 'sweetalert2'
import { ReservasContext } from '../../context/ContextReservas.jsx';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from '../footer/Footer.jsx';
import { UsuariosContext } from '../../context/ContextUsuarios.jsx';
import Titulo from '../imgCarousel/titulo/titulo.jsx';
 
 


 
import { Form, Button } from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext.js';

const FormularioReserva = () => {
  const { crearReserva } = useContext(ReservasContext);
  const [reserva, setReserva] = useState({
    usuario: '',
    sucursal: 'Chacabuco 474',  
    servicio: 'Almuerzo',  
    comensales: '',
    fecha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReserva({
      ...reserva,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reserva enviada:', reserva);
    crearReserva(reserva);
    setReserva({
      usuario: '',
      sucursal: 'Chacabuco 474',
      servicio: 'Almuerzo',
      comensales: '',
      fecha: ''
    });
  };

  return (
    <>
<Titulo link={"https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} texto={"Piano con filtros blanco y negro"} nombre={"Reservas"} />
      <body className='bodyReserva'>
      <div className='conteinerReserva'>
      <Form onSubmit={handleSubmit} className='formReserva'>
        <Form.Group className="mb-3">
          <Form.Label className='textReserva'>Usuario</Form.Label>
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
          <Form.Label className='textReserva'>Sucursal</Form.Label>
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
          <Form.Label className='textReserva'>Servicio</Form.Label>
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
          <Form.Label className='textReserva'>Comensales</Form.Label>
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
          <Form.Label className='textReserva'>Fecha</Form.Label>
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

      </div>
      </body>

    <Footer></Footer>    
    </>
  );

};

export default FormularioReserva;


 