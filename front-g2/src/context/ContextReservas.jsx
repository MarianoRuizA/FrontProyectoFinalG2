import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const ReservasContext = createContext()

const ContextReservas = ({children}) =>
{
  const [reservas, setReservas] = useState([])

  const traerReservas = async () => 
  {
    try {
      const response = await axios.get("https://backproyectofinalg2.onrender.com/api/reservas")
      setReservas(response.data)
    } catch (error) {
      console.log("No funciona traerReservas-->", error)
    }
  }

    // POST ---> agrega reserva.
    const crearReserva = async (reserva) => {
      try {
        const response = await axios.post("https://backproyectofinalg2.onrender.com/api/crear", reserva)
        setReservas([...reservas, response.data])
      }
      catch {
        console.log("No funciona crearReserva-->", error)
      }
    }

  const modificarReserva = async (reserva) =>
  {
    try {
      await axios.patch(`https://backproyectofinalg2.onrender.com/api/reservas/${reserva._id}`, reserva)
      traerReservas()
    } catch (error) {
      console.log("No funciona modificarReserva-->", error)
    }
  }

  const eliminarReserva = async (reserva) =>
  {
    try {
      await axios.delete(`https://backproyectofinalg2.onrender.com/api/reservas/${reserva._id}`)
      traerReservas()
    } catch (error) {
      console.log("No funciona eliminarReserva-->", error)
    }
  }

  useEffect(()=>{
    traerReservas()
  },[])

  return(
    <ReservasContext.Provider value={{reservas, traerReservas, crearReserva, modificarReserva, eliminarReserva}}>
      {children}
    </ReservasContext.Provider>
  )
}

export default ContextReservas