
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from "../src/views/registro/Registro";
import ContextUsuarios from './context/ContextUsuarios';
import Administracion from './views/administracion/administracion'
import UsuarioContext from './context/usuariosContext'

function App() {
  return (
  <>
   <ContextUsuarios> 
    <Registro />
   </ContextUsuarios>

      <UsuarioContext>
        <Administracion />
      </UsuarioContext>
    </>

  )
}

export default App
