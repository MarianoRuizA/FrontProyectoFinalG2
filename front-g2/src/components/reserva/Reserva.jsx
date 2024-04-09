import React from 'react'
import './reserva.css'
import { Button } from 'react-bootstrap';
 
const reserva = () => {
  return (
<>

 <h1 style={{textAlign: "center"}}>Te damos la bienvenida !!</h1> 
    <div className='montserrat-font div_conteiner'>
  
    <div className='conteiner_div '> 
        
    <h2   >Sucursales</h2>
        <Button variant='light' style={{width: "50%", height: "50px"} } className='mb-3' >Chacabuco 474 </Button>
        <Button  variant='light' style={{width: "50% ", height: "50px"}} className='mb-3'   >San Martin 821</Button>
        <Button  variant='light' style={{width: "50%", height: "50px"}}>24 de septiembre y congreso</Button>
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