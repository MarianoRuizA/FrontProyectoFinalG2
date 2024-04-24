import { createContext, useState, useEffect } from "react";
import axios from "axios"
import { jwtDecode } from "jwt-decode"

export const UsuariosContext = createContext()

const ContextUsuarios = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState();

  // GET ---> trae usuarios.
  const getUsuario = async () => {
    try {
      const response = await axios.get("https://backproyectofinalg2.onrender.com/api/usuarios") // con el axios get se traen los datos creados en la fakeApi (se levanto un servidor para la api con el json-server).
      setUsuarios(response.data) // se guardan los datos del http.
    }
    catch (error) {
      console.log("No funciona getUsuario-->", error)
    }
  }

  // POST ---> agrega usuarios.
  const createUsuario = async (registroUsers) => {
    try {
      const response = await axios.post("https://backproyectofinalg2.onrender.com/api/registrar", registroUsers)
      setUsuarios([...usuarios, response.data]) //se recuperan los datos existentes y se agregan los nuevos usuarios.
    }
    catch {
      console.log("No funciona createUsuario-->", error)
    }
  }

  const modificarUsuario = async (usuario) => {
    try {
      await axios.patch(`https://backproyectofinalg2.onrender.com/api/usuarios/${usuario._id}`, usuario)
      getUsuario()
    } catch (error) {
      console.log("No funciona modificarUsuario-->", error)
    }
  }

  const eliminarUsuario = async (usuario) => {
    try {
      await axios.delete(`https://backproyectofinalg2.onrender.com/api/usuarios/delete/${usuario._id}`)
      getUsuario()

    } catch (error) {
      console.log("No funciona eliminarUsuario-->", error)
    }
  }

  const logout = () => {
    localStorage.removeItem("user");
    setUsuarioLogueado(null);
    window.location.href = "/";
  }

  const loginUser = async (usuario) => {
    try {
      const response = await axios.post(`https://backproyectofinalg2.onrender.com/api/login`, usuario);
      const { token } = response.data;
      const decodeToken = jwtDecode(token);
      setUsuarioLogueado(decodeToken)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsuario()
  }, [])

  return (
    <>
      <UsuariosContext.Provider value={{ usuarios, getUsuario, createUsuario, modificarUsuario, eliminarUsuario, logout, loginUser, usuarioLogueado }}>
        {children}
      </UsuariosContext.Provider>
    </>
  )
}

export default ContextUsuarios
