import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const UsuarioProvider = createContext()

const UsuarioContext = ({children}) =>
{
    const [usuarios, setUsuarios] = useState([])
    const traerUsuarios = async () =>
    {
        try {
            const response = await axios.get(`http://localhost:8000/usuarios`)
            setUsuarios(response.data)
            console.log("funcona che")
        } catch (error) {
            console.log("No funciona traerUsuarios", error)
        }
    }
    const modificarUsuario = async (usuario) =>
    {
        try {
            await axios.put(`http://localhost:8000/usuarios/${usuario.id}`, usuario)
                } catch (error) {
            console("No funciona modificarUsuario-->", error)
        }
    }

    // const suspenderUsuario = async (pedido) =>
    // {       
    //     try {
    //         const response
    //     } catch (error) {
    //         console.log("No funciona suspenderUSuario-->", error)
    //     }
    // }

    const eliminarUsuario = async (id) =>
    {
        try{
            await axios.delete(`http://localhost:8000/usuarios/${id}`)

        }catch(error)
        {
            console.log("No funciona eliminarUsuario-->", error)
        }
    }

    useEffect(()=>{
        traerUsuarios()
    }, [])

    return(
        <UsuarioProvider.Provider value={{usuarios, modificarUsuario, eliminarUsuario}}>
            {children}
        </UsuarioProvider.Provider>
    )
}

export default UsuarioContext