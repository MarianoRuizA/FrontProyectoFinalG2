import React, { useState, useEffect, useContext } from 'react';
import "./fecha.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faArrowLeft, faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons"
import es from 'date-fns/locale/es';
import Swal from 'sweetalert2'
import { ReservasContext } from '../../context/ContextReservas';

const Fecha = ({ reserva, actualizarFechaReserva }) => {

  const { reservas } = useContext(ReservasContext)


  const [selectedDate, setSelectedDate] = useState(new Date());

  const currentDate = new Date();
  const FechaMax = new Date();
  
  const [indexInicio, setIndexInicio] = useState(0);
  const [indexFin, setIndexFin] = useState(7);

  const [banDate, setBanDate] = useState(false)

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


  

  //Seteo las variables a partir de mañana como fecha minima seleccionable
  const today = new Date()
  today.setDate(today.getDate() + 1)

  const tomorrow = new Date(today)
  const after = new Date(today)
  tomorrow.setDate(today.getDate() + 1)
  after.setDate(today.getDate() - 1)


  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  const [selectedTime, setSelectedTime] = useState(new Date());

  const twoWeeksLater = new Date();
  twoWeeksLater.setDate(today.getDate() + 14);

  const dates = [];



  for (let index = today; index <= twoWeeksLater; index.setDate(index.getDate() + 1)) {
    dates.push(new Date(index));
  }


  const [elements, setElements] = useState([]);

  const handleDateButtonClick = (date) => {
    setBanDate(true)
    setSelectedDate(date);
    setFechaSeleccionada(new Date(date.getFullYear(), date.getMonth(), date.getDate(), selectedTime.getHours(), selectedTime.getMinutes()));
    setSelectedTime(null) //tener cuidado porque cuando es nulo me tira varios errores en consola
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setFechaSeleccionada(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), time.getHours(), time.getMinutes()));
    setSelectedDate(fechaSeleccionada)

  };

  const handleReservar = () => {

    if (fechaSeleccionada.getDate() === new Date().getDate() || fechaSeleccionada.getHours() === new Date().getHours() && fechaSeleccionada.getMinutes() === new Date().getMinutes()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Seeccione una fecha y hora, por favor!",

      });
      return;
    }
    fechaSeleccionada.setHours(selectedTime.getHours(), selectedTime.getMinutes());

    const suma = 0
    const reservaExistente = reservas.filter(encontrado => encontrado.fecha == fechaSeleccionada.toLocaleDateString())
    if(reservaExistente.length != 0)
    {
      for (let i = 0; i < reservaExistente.length; i++) {
        suma += reservaExistente[i].comensales
      }
    }

    if ( reserva.comensales > (30-suma)) {

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Esta fecha y hora no está disponible. Por favor, elija otra.",

      });
      return;
    }
    else {

    actualizarFechaReserva(fechaSeleccionada.toLocaleDateString(), fechaSeleccionada.toLocaleTimeString(), fechaSeleccionada);
    

    }

  };




  useEffect(() => {
    const elementsToPush = []
    for (let i = indexInicio; i < indexFin; i++) {
      const dateObject = new Date(dates[i]);
      const day = dateObject.getDate();
      const dayName = dateObject.toLocaleString('es-ES', { weekday: 'short' });
      const monthName = dateObject.toLocaleDateString('es-ES', { month: 'long' });


      elementsToPush.push(
        <div key={day}>

          <div className='divFecha'>
            <Button style={{
              background: "none",
              borderColor: "none",
              borderStyle: "hidden"
            }} onClick={() => { handleDateButtonClick(dateObject) }}>

              <h3>{dayName}.</h3>

              <h4>{day} {monthName}</h4>
            </Button>

          </div>
          {selectedDate.getDate() === dateObject.getDate() ?

            < div key={day} className='inputPicker'   >

              <span > <FontAwesomeIcon icon={faClock} style={{ height: "25px", marginTop: "2px" }} /></span>
              <div  >
                <DatePicker

                  timeIntervals={60}
                  minTime={minTime}
                  maxTime={maxTime}
                  placeholderText='Horario'
                  showTimePicker
                  selected={selectedTime}
                  onChange={data => { handleTimeChange(data) }}
                  showTimeSelect
                  showTimeSelectOnly
                  dateFormat="h:mm aa"
                />
              </div>

            </div> : null}
        </div>
      )

    }


    setElements(elementsToPush);
  }, [indexInicio, selectedDate, selectedTime])


  console.log(reserva)

  return (<>
  <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", textAlign: "center", justifyItems: "center"}}>
    <>

      {indexInicio == !7 ? <h3 className='m-2' >Seleccione fecha y hora</h3> : null}
      <div className='divElements'  >

        {indexInicio === 7 ? <><Button style={{ margin: "10px" }} onClick={() => { setIndexInicio(0), setIndexFin(7) }} variant='light' className='btnError' ><FontAwesomeIcon icon={faArrowLeft} />  </Button></> : null}

        {elements}

        {indexInicio == !7 ? <Button style={{ margin: "10px" }} onClick={() => { setIndexInicio(7), setIndexFin(14) }} variant='light' className='btnError'> <FontAwesomeIcon icon={faArrowRight} /> </Button> : null}

      </div>
   
    </>
    {indexInicio === 7 ?

      <>  <h3 className='me-lg-2 '>Seleccione otra fecha y hora </h3>
        <div className='divOtherDate ' >
        
          <div className='divPicker '><DatePicker
            popperPlacement="top-start"
            selected={fechaSeleccionada.getDate() === new Date().getDate() || banDate ? null : selectedDate}
            onChange={date => { setSelectedDate(date), setFechaSeleccionada(date), setBanDate(false), setSelectedTime(date) }}
            minDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)} // Fecha actual más un día
            maxDate={FechaMax.setMonth(new Date().getMonth() + 2)}
            timeIntervals={60}
            minTime={minTime}
            maxTime={maxTime}
            placeholderText=' Elija fecha y hora'
            showTimeSelect
            showTimePicker
            locale={es}
            dateFormat="dd/MM/yyyy h:mm aa"
            showIcon
            className='otherDatePicker'
            showMonthDropdown>
          </DatePicker> </div>
        </div>
        {/* <Button onClick={() => { handleReservar() }} variant='light' className='my-2 btnError'>  <FontAwesomeIcon icon={faCheck} /> </Button> */}
        {console.log(fechaSeleccionada.toLocaleDateString())}
      
       </>
      : null

    } 
  
  </div>  <Button onClick={() => { handleReservar() }} variant='light' className='my-2 btnError'>  <FontAwesomeIcon icon={faCheck} /> </Button>
</>
  )
}
export default Fecha;