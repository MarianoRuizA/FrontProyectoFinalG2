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
      console.log("No funciona getUsuario-->", error)
    }
  }

  // POST ---> agrega usuarios.
  const createUsuario = async (registroUsers) => {
    try {
      const response = await axios.post("http://localhost:8000/usuarios", registroUsers)
      setUsuarios([...usuarios, response.data]) //se recuperan los datos existentes y se agregan los nuevos usuarios.
    }
    catch {
      console.log("No funciona createUsuario-->", error)
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

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  }
  
  useEffect(() => {
    getUsuario()
  }, [])

  
  // los children hacen referencia a los componentes que estan dentro de context usuarios en el app.
  return (
    <>
      <UsuariosContext.Provider value={{ usuarios, getUsuario, createUsuario, modificarUsuario, eliminarUsuario, logout }}>
        {children}
      </UsuariosContext.Provider>
    </>
  )
}

export default ContextUsuarios
