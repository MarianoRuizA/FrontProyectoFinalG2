import { useState } from "react";
import UsuariosContext from "./context/UsuariosContext";
import Navbar from "./componentes/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaPrincipal from "./views/paginaPrincipal/paginaPrincipal"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UsuariosContext>
        <Navbar />
         <PaginaPrincipal>
         </PaginaPrincipal>
      </UsuariosContext>
    </>
  );
}

export default App;