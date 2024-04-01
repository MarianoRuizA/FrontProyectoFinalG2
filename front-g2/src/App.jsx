import { useState } from "react";
import UsuariosContext from "./context/UsuariosContext";
import Navbar from "./componentes/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UsuariosContext>
        <Navbar />
      </UsuariosContext>
    </>
  );
}

export default App;