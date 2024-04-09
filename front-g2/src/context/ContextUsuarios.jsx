import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const UsuariosContext = createContext()

const ContextUsuarios = ({children}) => {
  const [usuarios, setUsuario] = useState ([])

   // GET ---> trae usuarios.
    const getUsuario = async () => {
      try { 
        const response = await axios.get ("http://localhost:9000/usuarios") // con el axios get se traen los datos creados en la fakeApi (se levanto un servidor para la api con el json-server).
        setUsuario (response.data) // se guardan los datos del http.
      }
      catch (error) {
        console.log("error")
      }
    }
    useEffect(() => {
      getUsuario() 
    },[])
    console.log(usuarios,"usuarios desde el context")
    // los children hacen referencia a los componentes que estan dentro de context usuarios en el app.
    return (
      <>
      <UsuariosContext.Provider value={{usuarios, getUsuario}}>
        {children}
      </UsuariosContext.Provider>
      </>
      )
    }
    
export default ContextUsuarios
    