import React, { useState, useEffect } from 'react';
import "./fecha.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button   } from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons"
 
const Fecha = ( ) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = new Date();
  const FechaMax = new Date();
   
const [indexInicio, setIndexInicio] = useState(0)
const [indexFin, setIndexFin] = useState(7)
  
  const daySelected = selectedDate.getDay();
  const daysToAdd = daySelected === 0 ? 1 : 8 - daySelected;
  const nextMonday = new Date(currentDate);
  nextMonday.setDate(currentDate.getDate() + daysToAdd);
  // Limitar horarios de reserva
  let minTime = new Date();
  let maxTime = new Date();
  if (daySelected >= 1 && daySelected <= 5) {
    minTime.setHours(9, 0, 0);
    maxTime.setHours(23, 59, 59); // Hora máxima a las 11:59:59 PM
  } else if (daySelected === 6) {
    minTime.setHours(12, 0, 0);
    maxTime.setHours(23, 59, 59); // Hora máxima a las 11:59:59 PM
  } else if (daySelected === 0) {
    minTime.setHours(12, 0, 0);
    maxTime.setHours(17, 59, 59); // Hora máxima a las 4:59:59 PM
  }
 
 

  let horarioExcluido = [];
  const diaExcluido = new Date(2024, 3, 15, 14);
  if (selectedDate.getTime() === diaExcluido.getTime()) {
    console.log(selectedDate.getTime())
    horarioExcluido = [diaExcluido];
    selectedDate.setDate( null)
  }
 const today = new Date( ) 
 const tomorrow = new Date(today)
 const after = new Date (today)
 tomorrow.setDate(today.getDate()+1)
 after.setDate(today.getDate()-1)


 const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

 const [selectedTime, setSelectedTime] = useState(null);

 const twoWeeksLater = new Date();
 twoWeeksLater.setDate(today.getDate() + 14);

 const dates = [];
 const dateOptions = { weekday: 'long', month: 'short', day: 'numeric' };

 for (let d = today; d <= twoWeeksLater; d.setDate(d.getDate() + 1)) {
   dates.push(new Date(d));
 }

  
 const   [elements, setElements] = useState([]);
 useEffect(()=>{
  const elementsToPush = []
  for (let i = indexInicio; i < indexFin; i++) {
    const dateObject = new Date(dates[i]);
    const day = dateObject.getDate();
    const dayName= dateObject.toLocaleString('es-ES', { weekday: 'short' });
    const monthName = dateObject.toLocaleDateString('es-ES', { month: 'long' });
    
     
    elementsToPush.push( 
      <div key={day}>
        <div className='divFecha' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderStyle: "groove",
          borderRadius: "100px",
          width: "100px",
          height: "120px",
          margin: " 5px",
          
        }}>
          <Button style={{
            background: "none",
            borderColor: "none",
            borderStyle: "hidden"
          }} onClick={() => setFechaSeleccionada(dateObject)}>
           
            <h3>{dayName}.</h3>
            <h4>{day} {monthName}</h4>
          </Button>
         
        </div>
      </div>
    ) 
  
 }

 setElements(elementsToPush);
 },[indexInicio])
 
return(<>
 
 <div style={{ display: "flex" }}>{elements}</div>
 
  {indexInicio ===7 ?
  <>
  <Button onClick={() => {setIndexInicio(0), setIndexFin(7)} }variant='light' className='my-2'><FontAwesomeIcon icon={faArrowLeft} /></Button> 
    <div>
    <h3>Seleccione otra fecha:</h3>
      <DatePicker 
        selected={fechaSeleccionada  ? fechaSeleccionada: selectedDate}
        onChange={date => setSelectedDate(date)}
        minDate={new Date() }
        maxDate={FechaMax.setMonth(new Date().getMonth() + 2)}
        timeIntervals={60}
        minTime={minTime}
        maxTime={maxTime}
        excludeTimes={horarioExcluido}
        dateFormat="dd/MM/yyyy HH:mm"
        showIcon
        show
        showTimeSelect
        showMonthDropdown>
  </DatePicker> 
    </div>
  </>
 : <Button  className='my-2' onClick={() => {setIndexInicio(7),setIndexFin(14)} } variant='light'> <FontAwesomeIcon icon={faArrowRight} /></Button>
    
}
  
     
       

    

  </>
)}
export default Fecha;
