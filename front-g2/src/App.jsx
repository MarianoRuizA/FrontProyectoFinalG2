import { useState } from 'react'
import Reserva from './components/reserva/Reserva'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Reserva/>
    </>
  )
}

export default App
