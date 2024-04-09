import React from 'react'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faClock,faMessage,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp,faInstagram } from '@fortawesome/free-brands-svg-icons';
 
const Footer = () => {
 
  return (

   
    <footer className='footer montserrat-font '>
  
    <div className='footer_container' >
 
       <  div className='container_div pt-lg-4'>
       
        <div> <span  style={{color: 'darkred'}}><FontAwesomeIcon style={{height:"30px"}} icon={faClock} /></span>  <h2 className='border_button'> Horarios de atencion</h2>    </div>
         <div> <h3 className='mt-lg-4 '>Lunes a viernes </h3> 09:00 a 24:00</div>
          <div><h3>Sabado </h3>12:00 a 24:00 hs</div>
          <div><h3>Domingo</h3> 12:00 a 17:00 hs </div>
      
         </div>
         <div className='container_div'>
            <div  ><span   style={{color: 'darkred'}}><FontAwesomeIcon style={{height:"30px"}} icon={faLocationDot} /></span><h2 className='border_button' >Sucursales </h2> </div>
            <div><h3>Chacabuco 474</h3></div>
           <div><h3>San Martin 821</h3></div>
          <div><h3>24 de septiembre y congreso</h3></div>
       </div>
       <div className='container_div  '>
          <div  ><span   style={{color: 'darkred'}}><FontAwesomeIcon style={{height:"30px"}} icon={faMessage} /></span><h2 className='border_button'>Contactate</h2></div>
          <div><a href="" className='container_div_aLink'> <h3><FontAwesomeIcon icon={faWhatsapp }    /> Whatsapp</h3></a> </div>
          <div><a href=""  className='container_div_aLink'><h3><FontAwesomeIcon icon={faInstagram} /> Instagram</h3></a> </div>
          <div><a href=""  className='container_div_aLink'><h3><FontAwesomeIcon icon={faEnvelope} /> Gmail</h3></a></div>
       </div>
    </div>
    </footer>
  )
  
}

export default Footer