import 'bootstrap/dist/css/bootstrap.min.css';
import Galeria from './views/galeria/galeria'
import GaleriaContext from './context/galeriaContext';

function App() {

  return (
    <>
    <GaleriaContext>
      <Galeria/>
    </GaleriaContext>
    </>
  )
}

export default App
