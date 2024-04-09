import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from "../src/views/registro/Registro";
import ContextUsuarios from './context/ContextUsuarios';

function App() {
  return (
  <>
   <ContextUsuarios> 
    <Registro />
   </ContextUsuarios>
  </>
  )
}

export default App
