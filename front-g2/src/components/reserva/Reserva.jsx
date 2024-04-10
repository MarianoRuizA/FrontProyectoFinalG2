import React, { useState } from 'react'
import './reserva.css'
import { Button } from 'react-bootstrap';
 import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
 import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons"
 
 
const reserva = () => {
const [showSucursales, setShowSucursales]  = useState(true)
const [showComensales, setShowComensales] = useState(false)
 const [showServicio, setShowServicio] = useState(false)
 const [showFecha, setShowFecha] = useState (false)
 const [cantidad, setCantidad] = useState(1)
 const [reserva, setReserva] = useState({
  sucursal: "",
  comensales: 0,
  servicio: "",
  fecha: ""
 })
 const backComensal = () =>{ //Funciom volver para el boton
    if (showComensales){
      setReserva({
        sucursal: ""
      })
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
 }
const nextComensalesFunction = ( ) => {
  setReserva(prevReserva => ({  // ...prevReserva conserva el estado de mi componente reserva con sus valores anteriores
    ...prevReserva,
    comensales: cantidad
  }));
  setShowComensales(false)
 setShowServicio(true)
}

 return (
   
<>

 <h1 style={{textAlign: "center"}}>Te damos la bienvenida !!</h1> 
    <div className='montserrat-font div_conteiner'>
      <header><Button onClick={() => backComensal()} variant='dark' className='m-3'><FontAwesomeIcon icon={faArrowLeft} /></Button>
   <span>
    {reserva.sucursal ? <Button variant='light'>Sucursal: {reserva.sucursal}</Button>  : null}
     {reserva.comensales  ?  <><span>  <Button variant='light'>Comensales: {reserva.comensales}</Button></span></> : null}
    {/* <Button variant='light'>Servicio: {reserva.servicio}</Button>
    <Button variant='light'>Fecha: {reserva.fecha}</Button> */} 
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
            <Button  className='mb-3' style={{width: "50%", height: "50px"} } variant='light'>Almuerzo</Button>
            <Button style={{width: "50%", height: "50px"} } variant='light'>Cena</Button></> : null}
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