import { Routes, Route } from "react-router-dom";
import Nosotros from "../../views/nosotros/Nosotros";

function Routes() {
  return (
    <>
    <Routes>
      <Route path="/nosotros" element={<Nosotros/>}></Route>
    </Routes>
    </>
  )
}

export default Routes
