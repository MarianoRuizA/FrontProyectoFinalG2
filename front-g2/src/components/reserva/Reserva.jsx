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
import Titulo from '../../componentes/imgCarousel/titulo/titulo.jsx';

const Reserva = () => {
  const [logueado, setLogueado] = useState(null)

  //lou
  const [reservasUsuario, setReservasUsuario] = useState([]); //establezco el estado para las reservas del usuario logueado.
  const limiteReservas = 3; //establezco el limite de reserva por cada persona.
  //lou

  const verificarLocalStorage = () => {
    return localStorage.getItem("user") !== null;
  }

  useEffect(() => {
    if (verificarLocalStorage()) {
      setLogueado(JSON.parse(localStorage.getItem("user")))
    }
  }, [])

  const { reservas, crearReserva } = useContext(ReservasContext)

  //lou --> se actualiza el esatado de reservasUsuario
  useEffect (() => {
    if (logueado) {
      const reservasDelUsuario = reservas.filter(reserva => reserva.usuario === logueado.email);
      console.log("Reservas del usuario:", reservasDelUsuario); // Agregar este log para verificar las reservas del usuario
      setReservasUsuario(reservasDelUsuario);
    }
  },[logueado, reservas]);

  //funcion para verificar el limite 
  const limiteAlcanzado = () => {
    return reservasUsuario.length >= limiteReservas;
  };
  //lou 


  const [showSucursales, setShowSucursales] = useState(true)
  const [showComensales, setShowComensales] = useState(false)
  const [showServicio, setShowServicio] = useState(false)
  const [showFecha, setShowFecha] = useState(false)
  const [cantidad, setCantidad] = useState(1)
  const [reserva, setReserva] = useState({
    _id: "",
    usuario: "",
    sucursal: "",
    servicio: "",
    comensales: 0,
    fecha: ""

  })


  const actualizarFechaReserva = (nuevaFecha, nuevaHora) => {
    const unido = nuevaFecha +" "+ nuevaHora
    const fechaReserva = new Date(unido)
    const actualizadoEmail = logueado.email
    
    setReserva(prevState => ({
      ...prevState,
      usuario: actualizadoEmail,
      fecha: fechaReserva
    }));

    Swal.fire({
      title: "Reserva realizada con exito!",
      icon: "success"
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload();
      }
    })

    console.log("TIPO DE DATO", typeof (reserva.fecha))
    console.log("SOY YO", reserva)
    crearReserva(reserva)



  };

  const backComensal = () => { //Funcion volver para el boton
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
      <Titulo link={"https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} texto={"Piano siendo tocado con filtros blanco y negro"} nombre={"Reservas"} />
      {logueado ? (
        <>
         {limiteAlcanzado() ? (
           <p>No puedes realizar más reservas. Has alcanzado el limite permitido.</p>
         ) : (
          <section id='sectionReservas'>
            <h1 style={{ textAlign: "center", marginBottom: "4rem", marginTop: "3rem" }} id='h1Reservas'>¡Visitanos!</h1>
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
                    <Button variant='light' onClick={(e) => setReserva({ sucursal: e.target.textContent })} className='sucursalButton btnError mb-lg-3' >Chacabuco 474 </Button>
                    <Button variant='light' onClick={(e) => setReserva({ sucursal: e.target.textContent })} className='sucursalButton mb-lg-3 btnError'  >San Martin 821</Button>
                    <Button variant='light' onClick={(e) => setReserva({ sucursal: e.target.textContent })} className='sucursalButton  mb-lg-3 btnError' >Gral. Paz 576</Button>
                    {reserva.sucursal ? setShowComensales(true) & setShowSucursales(false) : null}
                  </>
                ) : null}

                {showComensales ? <>  {/* Si show comensales es TRUE se muestra esto*/}
                  <h2>Escoja la cantidad de comensales</h2>
                  <div className='div_comensales'>
                    <button className='comensales_button' onClick={() => setCantidad(cantidad - 1)}><h4>-</h4></button>
                    {cantidad < 1 ? setCantidad(1) : null}
                    {cantidad > 15 ? setCantidad(15) : null}
                    <div className='comensales_cantidad'> <h4> {cantidad}</h4> </div>
                    <button className='comensales_button ' onClick={() => setCantidad(cantidad + 1)}><h4>+</h4></button>

                  </div>
                  <Button variant='light' onClick={() => nextComensalesFunction()} className='btnError'><FontAwesomeIcon icon={faArrowRight} /></Button>
                </>
                  : null}
                {showServicio ? <><h2 className='mb-lg-3'>Elija el servicio que le gustaria recibir</h2>
                  <Button onClick={(e) => nextServicioFunction(e.target.textContent)} className='sucursalButton btnError mb-lg-3' variant='light'>Almuerzo</Button>
                  <Button onClick={(e) => nextServicioFunction(e.target.textContent)} className='sucursalButton btnError mb-lg-3' variant='light'>Cena</Button></> : null}
                {showFecha ? <>

                  <Fecha reserva={reserva} 
                  actualizarFechaReserva={(nuevaFecha, nuevaHora) => { actualizarFechaReserva(nuevaFecha, nuevaHora) }} />
                  {/* <Button disabled>Hola</Button> */}
                </> : null}
              </div>

            </div>

          </section>
         )}
        </>
      )
        : (
          // Si el usuario no está logueado
          <>
            <div id='divLogueadoReservas'>

              <h1 className='text-dark' id='h1Logueado'>Debe iniciar sesión para solicitar una reserva</h1>
              <img src="https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Familia de padre, madre e hijo pequeño brindando felices en un bar" id='imgLogueado' />
              <h4 id='h4Logueado'>Por favor seleccione la opción "Iniciar Sesión" del menú</h4>
            </div>
          </>
        )}<Footer />
    </>
  );
}

export default Reserva  