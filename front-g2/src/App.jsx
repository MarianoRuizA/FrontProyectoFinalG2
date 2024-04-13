
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextUsuarios from './context/ContextUsuarios';
import Administracion from './views/administracion/administracion'


function App() {
  return (
  <>
   <ContextUsuarios> 
    <Administracion />
   </ContextUsuarios>

    </>

  )
}

export default App
