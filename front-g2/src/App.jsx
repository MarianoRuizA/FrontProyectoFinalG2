import Galeria from './views/galeria/galeria'
import GaleriaContext from './context/galeriaContext';
// import UsuariosContext from "./context/UsuariosContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaPrincipal from "./views/paginaPrincipal/paginaPrincipal"
import Footer from './components/footer/Footer.jsx'
import ContextUsuarios from './context/ContextUsuarios';
import ContextReservas from './context/ContextReservas';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Navbar from './componentes/Navbar/Navbar.jsx';

function App() {

  return (
    <>
      <ContextUsuarios>
        <ContextReservas>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <GaleriaContext>
              <Navbar/>
              <PaginaPrincipal />
              <Footer />
            </GaleriaContext>
          </LocalizationProvider>
        </ContextReservas>
      </ContextUsuarios>
    </>
  );
}

export default App;

