import 'bootstrap/dist/css/bootstrap.min.css';
import GaleriaContext from './context/galeriaContext';
import ContextUsuarios from './context/ContextUsuarios';
import ContextReservas from './context/ContextReservas';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Navbar from './componentes/Navbar/Navbar.jsx';
import Rutas from './componentes/Rutas/Rutas.jsx';
import Reserva from './components/reserva/Reserva'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <Reserva/>
    </>
  );
}

export default App;

