import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./componentes/navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <h1>TANGO EL MEJOR RESTAURANTE</h1>
    </>
  );
}

export default App;