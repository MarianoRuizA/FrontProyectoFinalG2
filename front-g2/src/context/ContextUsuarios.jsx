import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const UsuariosContext = createContext()

const ContextUsuarios = ({children}) => {
  const [usuarios, setUsuario] = useState ([])

   // GET ---> trae usuarios.
    const getUsuario = async () => {
      try { 
        const response = await axios.get ("http://localhost:9000/usuarios")
        setUsuario (response.data) 
      }
      catch (error) {
        console.log("error")
      }
    }
    useEffect(() => {
        getUsuario() 
        },[])
       return (
        <>
        <UsuariosContext.Provider value={{usuarios, getUsuario}}>
            {children}
        </UsuariosContext.Provider>
          
        </>
    
      )
    }
    
export default ContextUsuarios
    