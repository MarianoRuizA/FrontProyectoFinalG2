import React, { useState } from 'react'
import './reserva.css'
import { Button } from 'react-bootstrap';
 import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
 import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
 
 
const reserva = () => {
 const [showComensales, setShowComensales] = useState(false)
 const [cantidad, setCantidad] = useState(1)
 const [reserva, setReserva] = useState({
  sucursal: "",
  comensales: 0,
  servicio: "",
  fecha: ""
 })
 const handleClick = () =>{
  setReserva({
    sucursal: ""
  })

  setShowComensales(false)
 }
  return (
   
<>

 <h1 style={{textAlign: "center"}}>Te damos la bienvenida !!</h1> 
    <div className='montserrat-font div_conteiner'>
      <header><Button onClick={() => handleClick()} variant='dark' className='m-3'><FontAwesomeIcon icon={faArrowLeft} /></Button>
   <span>
   <Button variant='light'>Sucursal: {reserva.sucursal}</Button>
    <Button variant='light'>Personas: {reserva.comensales}</Button>
    <Button variant='light'>Servicio: {reserva.servicio}</Button>
    <Button variant='light'>Fecha: {reserva.fecha}</Button>
   </span>
    </header>
    
    <div className='conteiner_div '> 
       
         {showComensales ? null:   
        <>
        
        <h2  >Sucursales</h2>
        <Button variant='light'  onClick={ (e)=>setReserva({sucursal: e.target.textContent}) } style={{width: "50%", height: "50px"} } className='mb-3' >Chacabuco 474 </Button>
        <Button  variant='light'  onClick={(e)=>setReserva({sucursal: e.target.textContent}) } style={{width: "50% ", height: "50px"}} className='mb-3'   >San Martin 821</Button>
        <Button  variant='light' onClick={(e)=>setReserva({sucursal: e.target.textContent}) } style={{width: "50%", height: "50px"}}>24 de septiembre y congreso</Button>
        {reserva.sucursal ? setShowComensales(true): null}
        </>}
      
        {showComensales ? <>
        <h2>Escoja la cantidad de comensales</h2>
          <div className='div_comensales'>
    
          <button className='comensales_button' onClick={()=> setCantidad(cantidad-1)}><h4>-</h4></button>
          {cantidad < 1 ? setCantidad(1): null  }
          <div className='comensales_cantidad'> <h4> {cantidad}</h4></div>
          <button className='comensales_button' onClick={()=>setCantidad(cantidad+1)}><h4>+</h4></button>
          </div>
        </>            
        
        : null }

    </div> 
  
{/*  objeto reserva: {
  cantidad de comensales: 0,
  fecha: ""
  servicio: ""

}  */}
     </div>

</>
    

  )
}

export default reserva