import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const ReservasContext = createContext()

const ContextReservas = ({children}) =>
{
  const [reservas, setReservas] = useState([])

  const traerReservas = async () => 
  {
    try {
      const response = await axios.get("http://localhost:8000/reservas")
      setReservas(response.data)
    } catch (error) {
      console.log("No funciona traerReservas-->", error)
    }
  }

  const modificarReserva = async (reserva) =>
  {
    try {
      await axios.put(`http://localhost:8000/reservas/${reserva.id}`, reserva)
      traerReservas()
    } catch (error) {
      console.log("No funciona modificarReserva-->", error)
    }
  }

  const eliminarReserva = async (reserva) =>
  {
    try {
      await axios.delete(`http://localhost:8000/reservas/${reserva.id}`)
      traerReservas()
    } catch (error) {
      console.log("No funciona eliminarReserva-->", error)
    }
  }

  useEffect(()=>{
    traerReservas()
  },[])

  return(
    <ReservasContext.Provider value={{reservas, traerReservas, modificarReserva, eliminarReserva}}>
      {children}
    </ReservasContext.Provider>
  )
}

export default ContextReservas