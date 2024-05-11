import { Routes, Route } from "react-router"
import PaginaPrincipal from "../../views/paginaPrincipal/paginaPrincipal"
import Administracion from "../../views/administracion/administracion"
import Galeria from "../../views/galeria/galeria"
import Nosotros from "../../views/nosotros/Nosotros"
import Error404 from "../../views/error404/error404"
import Registro from "../../views/registro/Registro"
import Reserva from "../../componentes/reserva/Reserva"

const Rutas = () =>
{
    return(
        <>
        <Routes>
            <Route path="/" element={<PaginaPrincipal/>}/>
            <Route path="/admin" element={<Administracion/>}/>
            <Route path="/galeria" element={<Galeria/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/reservas" element={<Reserva/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
        </>
    )
}

export default Rutas