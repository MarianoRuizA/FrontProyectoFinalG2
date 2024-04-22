import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UsuariosProvider = createContext();

const UsuariosContext = ({ children }) => {

    const [usuarios, setUsuarios] = useState([])

  const getUsers = async () => {
        try {
      const response = await axios.get("http://localhost:8000/usuarios");
      setUsuarios(response.data);
                } catch (error) {
      console.log(error);
        }
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsuariosProvider.Provider value={{ usuarios, getUsers, logout }}>
            {children}
    </UsuariosProvider.Provider>
    )

}

export default UsuariosContext