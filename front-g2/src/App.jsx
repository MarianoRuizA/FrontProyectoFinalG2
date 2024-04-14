
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextUsuarios from './context/ContextUsuarios';
import Administracion from './views/administracion/administracion'
import ContextReservas from './context/ContextReservas';


function App() {
  return (
    <>
      <ContextUsuarios>
        <ContextReservas>
          <Administracion />
        </ContextReservas>
      </ContextUsuarios>

    </>

  )
}

export default App
