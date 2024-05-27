import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { jwtDecode } from "jwt-decode"

export const UsuariosContext = createContext()

const ContextUsuarios = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState();
  const [emailLogueado, setEmailLogueado] = useState()
  const navigate = useNavigate();

  // GET ---> trae usuarios.
  const getUsuario = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://backproyectofinalg2.onrender.com/api/usuarios",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ) // con el axios get se traen los datos creados en la fakeApi (se levanto un servidor para la api con el json-server).
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
      const token = localStorage.getItem("token");
      await axios.patch(`https://backproyectofinalg2.onrender.com/api/usuarios/${usuario._id}`, usuario,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      getUsuario()
    } catch (error) {
      console.log("No funciona modificarUsuario-->", error)
    }
  }

  const eliminarUsuario = async (usuario) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`https://backproyectofinalg2.onrender.com/api/usuarios/delete/${usuario._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      getUsuario()

    } catch (error) {
      console.log("No funciona eliminarUsuario-->", error)
    }
  }

  const logout = () => {
    // Borra el token de usuario del local storage
    localStorage.removeItem("user");
    // Actualiza el estado de usuario logueado a null
    setUsuarioLogueado(null);

    navigate("/")
  }

  const loginUser = async (usuario) => {
    try {
      setEmailLogueado(usuario.email)
      const response = await axios.post(`https://backproyectofinalg2.onrender.com/api/login`, usuario);
      const { token } = response.data;
      localStorage.setItem("token", token);
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
      <UsuariosContext.Provider value={{ usuarios, getUsuario, createUsuario, modificarUsuario, eliminarUsuario, logout, loginUser, usuarioLogueado, emailLogueado }}>
        {children}
      </UsuariosContext.Provider>
    </>
  )
}

export default ContextUsuarios
