
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextUsuarios from './context/ContextUsuarios';
import Administracion from './views/administracion/administracion'
import ContextReservas from './context/ContextReservas';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function App() {
  return (
    <>
      <ContextUsuarios>
        <ContextReservas>
          <LocalizationProvider dateAdapter={AdapterDayjs}>

          <Administracion />
          </LocalizationProvider>
        </ContextReservas>
      </ContextUsuarios>

    </>

  )
}

export default App
