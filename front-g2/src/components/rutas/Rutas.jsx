import { Routes, Route } from "react-router-dom";
import Nosotros from "../../views/nosotros/Nosotros";
import PaginaPrincipal from "../../views/paginaPrincipal/paginaPrincipal";

const Rutas = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/nosotros" element={<Nosotros/>}/>
    </Routes>
    </>
  )
}

export default Rutas
