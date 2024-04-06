import { Routes, Route } from "react-router-dom";
import Home from "../../views/home/Home";
import Registro from "../../views/registro/Registro"

const Rutas = () => {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/registro" element={<Registro />}></Route>
  </Routes>
  )
}

export default Rutas
