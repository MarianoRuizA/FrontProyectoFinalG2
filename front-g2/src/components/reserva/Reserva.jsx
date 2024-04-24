import React, { useState, useEffect, useContext } from 'react'
import './reserva.css'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Fecha from '../fecha/Fecha.jsx';
import Swal from 'sweetalert2'
import { ReservasContext } from '../../context/ContextReservas.jsx';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from '../../componentes/footer/Footer.jsx';
import { UsuariosContext } from '../../context/ContextUsuarios.jsx';
import Titulo from '../../componentes/imgCarousel/titulo/titulo.jsx';


const Reserva = () => {
  const { reservas, crearReserva } = useContext(ReservasContext)
  const { emailLogueado } = useContext(UsuariosContext)



  const [showSucursales, setShowSucursales] = useState(true)
  const [showComensales, setShowComensales] = useState(false)
  const [showServicio, setShowServicio] = useState(false)
  const [showFecha, setShowFecha] = useState(false)
  const [cantidad, setCantidad] = useState(1)
  const [reserva, setReserva] = useState({
    _id: "",
    usuario: emailLogueado,
    sucursal: "",
    servicio: "",
    comensales: 0,
    fecha: ""

  })


  const actualizarFechaReserva = (nuevaFecha, nuevaHora) => {
    const unido = nuevaFecha + " " + nuevaHora
    setReserva(prevState => ({
      ...prevState,
      fecha: unido
    }));



    crearReserva(reserva)
    Swal.fire({
      title: "Reserva realizada con exito!",
      icon: "success"
    })

  };
  console.log(reserva)
  console.log("FECHA", reserva.fecha)
  const backComensal = () => { //Funciom volver para el boton
    if (showComensales) {
      setReserva(prevReserva => ({  // ...prevReserva conserva el estado de mi componente reserva con sus valores anteriores
        ...prevReserva,
        sucursal: ""
      }));
      setShowComensales(false)
      setShowSucursales(true)
    }
    if (showServicio) {
      setReserva(prevReserva => ({  // ...prevReserva conserva el estado de mi componente reserva con sus valores anteriores
        ...prevReserva,
        comensales: 0
      }));
      setShowServicio(false)
      setShowComensales(true)
    }

    if (showFecha) {
      setReserva(prevReserva => ({  // ...prevReserva conserva el estado de mi componente reserva con sus valores anteriores
        ...prevReserva,
        servicio: ""
      }));

      setShowFecha(false)
      setShowServicio(true)

    }

  }
  const nextComensalesFunction = () => {
    setReserva(prevReserva => ({  // ...prevReserva conserva el estado de mi componente reserva con sus valores anteriores
      ...prevReserva,
      comensales: cantidad
    }));
    setShowComensales(false)
    setShowServicio(true)
  }
  const nextServicioFunction = (servicioElejido) => {
    setReserva(prevReserva => ({  // ...prevReserva conserva el estado de mi componente reserva con sus valores anteriores
      ...prevReserva,
      servicio: servicioElejido
    }));
    setShowServicio(false)
    setShowFecha(true)

  }



  useEffect(() => {
    document.title = "Reservar ahora";
  }, [])

  return (
    <>
    <Titulo link={"https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" } texto={"Piano con filtros blanco y negro"} nombre={"Reservas"}/>
      {emailLogueado ? (
    
        
          
          <>
            <h1 style={{ textAlign: "center" }}>Te damos la bienvenida !!</h1>
            <div className='montserrat-font div_conteiner'>
              <div>
                <Button onClick={() => backComensal()} variant='dark' className=' backButton '>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
                <div className='divButtons'>
                  {reserva.sucursal ? <Button variant='light'>Sucursal: {reserva.sucursal}</Button> : null}
                  {reserva.servicio ? <Button variant='light'>Servicio: {reserva.servicio}</Button> : null}
                  {reserva.comensales ? <Button variant='light'>Comensales: {reserva.comensales}</Button> : null}
                  {reserva.fecha ? <Button variant='light'>Fecha: {reserva.fecha}</Button> : null}
                </div>
              </div>
  
              <div className='conteiner_div '>
                {showSucursales ? (
                  <>
                    <h2>Sucursales</h2>
                    <Button variant='light' onClick={(e) => setReserva({ sucursal: e.target.textContent })} className='sucursalButton mb-lg-3' >Chacabuco 474 </Button>
                    <Button variant='light' onClick={(e) => setReserva({ sucursal: e.target.textContent })} className='sucursalButton mb-lg-3'  >San Martin 821</Button>
                    <Button variant='light' onClick={(e) => setReserva({ sucursal: e.target.textContent })} className='sucursalButton  mb-lg-3' >Gral. Paz 576</Button>
                    {reserva.sucursal ? setShowComensales(true) & setShowSucursales(false) : null}
                  </>
                ) : null}
  
                {/* Otros bloques de código */}
              </div>

            </div>
            
          </>
        )
 : (
        // Si el usuario no está logueado
        <h1 className='text-dark'>Debe estar logueado para solicitar una reserva</h1>
      )}<Footer />
    </>
  );
}

export default Reserva