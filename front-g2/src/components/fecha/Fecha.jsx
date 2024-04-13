import React, { useState } from 'react';
import "./fecha.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button   } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Fecha = ({date}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = new Date();
  const FechaMax = new Date();
  // const minutosASumar = 60 - currentDate.getMinutes();
  // currentDate.setMinutes(currentDate.getMinutes() + minutosASumar);
  // const nuevaHoraSeteada = currentDate.toLocaleTimeString();


  
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

 
 const twoWeeksLater = new Date();
 twoWeeksLater.setDate(today.getDate() + 14);

 const dates = [];
 const dateOptions = { weekday: 'long', month: 'short', day: 'numeric' };

 for (let d = today; d <= twoWeeksLater; d.setDate(d.getDate() + 1)) {
   dates.push(new Date(d));
 }

 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 4,
   slidesToScroll: 1,
 };
  return (
    <>
        {/*Div que muestra las fechas a elegir*/}
        <Slider {...settings}>
      {dates.map(date => {
        const dateObject = new Date(date);
        const day = dateObject.getDate();
        const monthName = dateObject.toLocaleDateString('es-ES', { month: 'long' });

        return (
          <div key={day}>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderStyle: "groove",
              borderRadius: "100px",
              width: "100px",
              height: "100px",
              margin: "5px"
            }}>
              <Button style={{
                background: "none",
                borderColor: "none",
                borderStyle: "hidden"
              }} onClick={() => setFechaSeleccionada(dateObject)}>
                <h2>{monthName}</h2>
                <h4>{day}</h4>
              </Button>
            </div>
          </div>
        );
      })}
    </Slider>
     
       
          <h2>Selecciona una fecha:</h2>
      <DatePicker 
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        minDate={new Date()}
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
      
       
     
    </>
  );
 
}
export default Fecha;
