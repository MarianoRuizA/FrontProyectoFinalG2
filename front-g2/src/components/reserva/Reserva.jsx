import React, { useState } from 'react'
import './reserva.css'
import { Button } from 'react-bootstrap';
 import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
 import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons"
 import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
 
const reserva = () => {
const [showSucursales, setShowSucursales]  = useState(true)
const [showComensales, setShowComensales] = useState(false)
 const [showServicio, setShowServicio] = useState(false)
 const [showFecha, setShowFecha] = useState (false)
 const [selectedDate, setSelectedDate] = useState(new Date());
 const [cantidad, setCantidad] = useState(1)
 const [reserva, setReserva] = useState({
  sucursal: "",
  comensales: 0,
  servicio: "",
  fecha: ""
 })
 const backComensal = () =>{ //Funciom volver para el boton
    if (showComensales){
      setReserva(prevReserva => ({  // ...prevReserva conserva el estado de mi componente reserva con sus valores anteriores
        ...prevReserva,
          sucursal: ""
      }));
      setShowComensales(false)
      setShowSucursales(true)
    }
    if(showServicio){
      setReserva(prevReserva => ({  // ...prevReserva conserva el estado de mi componente reserva con sus valores anteriores
    ...prevReserva,
      comensales: 0
  }));
      setShowServicio(false)
      setShowComensales(true)
    }

 if(showFecha){
    setReserva(prevReserva => ({  // ...prevReserva conserva el estado de mi componente reserva con sus valores anteriores
    ...prevReserva,
      servicio: ""
    }));

    setShowFecha(false)
    setShowServicio(true)
    
 }

}
const nextComensalesFunction = ( ) => {
  setReserva(prevReserva => ({  // ...prevReserva conserva el estado de mi componente reserva con sus valores anteriores
    ...prevReserva,
    comensales: cantidad
  }));
  setShowComensales(false)
  setShowServicio(true)
}
const nextServicioFunction = (servicioElejido) =>{
  setReserva(prevReserva => ({  // ...prevReserva conserva el estado de mi componente reserva con sus valores anteriores
    ...prevReserva,
    servicio: servicioElejido
  }));
  setShowServicio(false)
  setShowFecha(true)
  
}
 return (
   
<>

 <h1 style={{textAlign: "center"}}>Te damos la bienvenida !!</h1> 
    <div className='montserrat-font div_conteiner'>
      <header><Button onClick={() => backComensal()} variant='dark' className='m-3'><FontAwesomeIcon icon={faArrowLeft} /></Button>
   <span >
    {reserva.sucursal ? <Button   variant='light'>Sucursal: {reserva.sucursal}</Button>  : null}
     {reserva.comensales  ? <><Button variant='light'>Comensales: {reserva.comensales}</Button></> : null}
     {reserva.servicio ? <Button variant='light'>Servicio: {reserva.servicio}</Button>: null}
      {reserva.fecha ? <Button variant='light'>Fecha: {reserva.fecha}</Button> : null}
   </span>
    </header>
    
    <div className='conteiner_div '> 
       
         {showSucursales ?  <>
         <h2  >Sucursales</h2>
        <Button variant='light'  onClick={ (e)=>setReserva({sucursal: e.target.textContent}) } style={{width: "50%", height: "50px"} } className='mb-3' >Chacabuco 474 </Button>
        <Button  variant='light'  onClick={(e)=>setReserva({sucursal: e.target.textContent}) } style={{width: "50% ", height: "50px"}} className='mb-3'   >San Martin 821</Button>
        <Button  variant='light' onClick={(e)=>setReserva({sucursal: e.target.textContent}) } style={{width: "50%", height: "50px"}}>24 de septiembre y congreso</Button>
        {reserva.sucursal ? setShowComensales(true)  & setShowSucursales(false) : null}
      </>:null}
      
        {showComensales ? <>  {/* Si show comensales es TRUE se muestra esto*/}
        <h2>Escoja la cantidad de comensales</h2>
          <div className='div_comensales'>
             <button className='comensales_button' onClick={()=> setCantidad(cantidad-1)}><h4>-</h4></button>
               {cantidad < 1 ? setCantidad(1): null  }
              <div className='comensales_cantidad'> <h4> {cantidad}</h4> </div>
               <button className='comensales_button' onClick={()=>setCantidad(cantidad+1)}><h4>+</h4></button>
          </div>
          <Button variant='light' onClick={()=> nextComensalesFunction()} ><FontAwesomeIcon icon={faArrowRight} /></Button>
        </>            
         : null }
      {showServicio ? <><h2>Elija el servicio que le gustaria recibir</h2>
            <Button onClick={(e)=>nextServicioFunction( e.target.textContent)} className='mb-3' style={{width: "50%", height: "50px"} } variant='light'>Almuerzo</Button>
            <Button onClick={(e)=>nextServicioFunction( e.target.textContent)} style={{width: "50%", height: "50px"} } variant='light'>Cena</Button></> : null}
       {showFecha ?  <> <h2>Selecciona una fecha:</h2>
      <DatePicker selected={selectedDate} 
  
      onChange={date => setSelectedDate(date)} 
      minDate={new Date()} // Establece la fecha mínima al día actual
      maxDate={ new Date().setMonth(new Date().getMonth() + 2)} // Establece la fecha máxima a dos meses después del día actual
      showTimeSelect
        dateFormat={"dd/MM/yyyy HH:mm"} />
      {selectedDate && <p>Fecha seleccionada: {selectedDate.toLocaleDateString()} </p>}
      </> :null}      
    </div> 
  
 
     </div>

</>
    

  )
}

export default reserva