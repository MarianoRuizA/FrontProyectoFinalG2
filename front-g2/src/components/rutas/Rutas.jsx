import { Routes, Route } from "react-router-dom";
import Home from "../../views/home/Home";
import Nosotros from "../../views/nosotros/Nosotros";

function Rutas() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros/>}></Route>
    </Routes>
    </>
  )
}

export default Rutas
