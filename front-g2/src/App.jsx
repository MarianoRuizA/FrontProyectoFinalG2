import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './componentes/titulo/titulo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo/>
    </>
  )
}

export default App
