import { Routes, Route } from "react-router-dom";
import Home from "../../views/nosotros/home/Home";
import About from "../about/About";

function Rutas() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About/>}></Route>
    </Routes>
    </>
  )
}

export default Rutas
