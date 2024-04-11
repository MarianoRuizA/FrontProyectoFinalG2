import { useState } from "react";
import Navbar from "./componentes/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaPrincipal from "./views/paginaPrincipal/paginaPrincipal"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <PaginaPrincipal>

      </PaginaPrincipal>
    </>
  );
}

export default App;