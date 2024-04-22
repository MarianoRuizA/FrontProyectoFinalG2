import Galeria from './views/galeria/galeria'
import GaleriaContext from './context/galeriaContext';
import UsuariosContext from "./context/UsuariosContext";
import Navbar from "./componentes/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaPrincipal from "./views/paginaPrincipal/paginaPrincipal"
import Nosotros from './views/nosotros/Nosotros.jsx';
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <>
    <GaleriaContext>
      <Galeria/>
    </GaleriaContext>
      <UsuariosContext>
        <Navbar />
         <PaginaPrincipal>
         </PaginaPrincipal>
         <Footer/>
         <Nosotros />
      </UsuariosContext>
    </>
  );
}

export default App;