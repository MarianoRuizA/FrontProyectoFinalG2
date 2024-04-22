import Galeria from './views/galeria/galeria'
import GaleriaContext from './context/galeriaContext';
import UsuariosContext from "./context/UsuariosContext";
import Navbar from "./componentes/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaPrincipal from "./views/paginaPrincipal/paginaPrincipal"
import Nosotros from './views/nosotros/Nosotros.jsx';
import Footer from './components/footer/Footer.jsx'
import ContextUsuarios from './context/ContextUsuarios';
import Administracion from './views/administracion/administracion'
import ContextReservas from './context/ContextReservas';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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
      <ContextUsuarios>
        <ContextReservas>
          <LocalizationProvider dateAdapter={AdapterDayjs}>

          <Administracion />
          </LocalizationProvider>
        </ContextReservas>
      </ContextUsuarios>
    </>
  );
}

export default App;

