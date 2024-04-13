import { Routes, Route } from "react-router"
import PaginaPrincipal from "../../views/paginaPrincipal/paginaPrincipal"

const Rutas = () =>
{
    return(
        <>
        <Routes>
            <Route path="/" element={<PaginaPrincipal/>}/>
            <Route path="/admin" element={<Administracion/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
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