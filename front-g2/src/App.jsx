import UsuariosContext from "./context/UsuariosContext";
import Navbar from "./componentes/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaPrincipal from "./views/paginaPrincipal/paginaPrincipal"

import Footer from './components/footer/Footer.jsx'
function App() {

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