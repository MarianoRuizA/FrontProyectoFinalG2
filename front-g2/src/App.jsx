import { useState } from "react";
import UsuariosContext from "./context/UsuariosContext";
import Navbar from "./componentes/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaPrincipal from "./views/paginaPrincipal/paginaPrincipal"

import Footer from './components/footer/Footer.jsx'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UsuariosContext>
        <Navbar />
         <PaginaPrincipal>
         </PaginaPrincipal>
         <Footer/>
      </UsuariosContext>
    </>
  );
}

export default App;