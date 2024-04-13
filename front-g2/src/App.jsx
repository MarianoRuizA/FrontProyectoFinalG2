
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/rutas/Rutas.jsx';
import Error404 from "./views/error404/error404"


function App() {

  return (
    <>
    <Rutas />
      <Error404>
      </Error404>
    </>
  )
}

export default App
