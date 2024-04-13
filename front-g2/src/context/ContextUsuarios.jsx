import { createContext, useState, useEffect } from "react";
import axios from "axios"

export const UsuariosContext = createContext()

const ContextUsuarios = ({ children }) => {
  const [usuarios, setUsuarios] = useState([])

  // GET ---> trae usuarios.
  const getUsuario = async () => {
    try {
      const response = await axios.get("http://localhost:8000/usuarios") // con el axios get se traen los datos creados en la fakeApi (se levanto un servidor para la api con el json-server).
      setUsuarios(response.data) // se guardan los datos del http.
    }
    catch (error) {
      console.log("error")
    }
  }

  // POST ---> agrega usuarios.
  const createUsuario = async (registroUsers) => {
    try {
      const response = await axios.post("http://localhost:8000/usuarios", registroUsers)
      setUsuario([...usuarios, response.data]) //se recuperan los datos existentes y se agregan los nuevos usuarios.
    }
    catch {
      console.log("error")
    }
  }

  const traerUsuarios = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/usuarios`)
      setUsuarios(response.data)
    } catch (error) {
      console.log("No funciona traerUsuarios--> ", error)
    }
  }

  const modificarUsuario = async (usuario) => {
    try {
      await axios.put(`http://localhost:8000/usuarios/${usuario.id}`, usuario)
      getUsuario()
    } catch (error) {
      console.log("No funciona modificarUsuario-->", error)
    }
  }

  const eliminarUsuario = async (usuario) => {
    try {
      await axios.delete(`http://localhost:8000/usuarios/${usuario.id}`)
      getUsuario()

    } catch (error) {
      console.log("No funciona eliminarUsuario-->", error)
    }
  }

  useEffect(() => {
    getUsuario()
  }, [])
  // los children hacen referencia a los componentes que estan dentro de context usuarios en el app.
  return (
    <>
      <UsuariosContext.Provider value={{ usuarios, getUsuario, createUsuario, modificarUsuario, eliminarUsuario }}>
        {children}
      </UsuariosContext.Provider>
    </>
  )
}

export default ContextUsuarios
