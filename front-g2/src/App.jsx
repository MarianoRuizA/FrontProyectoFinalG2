import { useState } from "react";
import Navbar from "./componentes/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h4>TANGO EL MEJOR RESTAURANTE</h4>
    </>
  );
}

export default App;