import { Routes, Route } from "react-router-dom";
import Home from "../../views/home/Home";
import FormRegistro from "../../views/registro/Registro"

const Rutas = () => {
  return (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/registro" element={<FormRegistro />}></Route>
  </Routes>
  )
}

export default Rutas
