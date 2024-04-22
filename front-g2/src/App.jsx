import GaleriaContext from './context/galeriaContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaPrincipal from "./views/paginaPrincipal/paginaPrincipal"
import ContextUsuarios from './context/ContextUsuarios';
import ContextReservas from './context/ContextReservas';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Navbar from './componentes/Navbar/Navbar.jsx';
import Footer from './componentes/footer/Footer.jsx';
import Rutas from './componentes/Rutas/Rutas.jsx';

function App() {

  return (
    <>
      <ContextUsuarios>
        <ContextReservas>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <GaleriaContext>
              <Navbar/>
              <Rutas/>
            </GaleriaContext>
          </LocalizationProvider>
        </ContextReservas>
      </ContextUsuarios>
    </>
  );
}

export default App;

