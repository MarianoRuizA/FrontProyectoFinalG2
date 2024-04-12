import 'bootstrap/dist/css/bootstrap.min.css'
import Administracion from './views/administracion/administracion'
import UsuarioContext from './context/usuariosContext'


function App() {


  return (
    <>
      <UsuarioContext>
        <Administracion />
      </UsuarioContext>
    </>
  )
}

export default App
