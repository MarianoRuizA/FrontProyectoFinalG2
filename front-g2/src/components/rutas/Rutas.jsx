import { Routes, Route } from "react-router-dom";
import Nosotros from "../../views/nosotros/Nosotros";
import PaginaPrincipal from "../../views/paginaPrincipal/paginaPrincipal";

function Rutas() {
  return (
    <>
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/nosotros" element={<Nosotros/>}></Route>
    </Routes>
    </>
  )
}

export default Rutas
