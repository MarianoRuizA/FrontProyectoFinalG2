import { useEffect } from 'react'
import "./paginaPrincipal.css"
import Banner from "../../componentes/Banner/Banner";
import TarjetaDer from "../../componentes/Tarjeta/TarjetaDer";
import TarjetaIzq from "../../componentes/Tarjeta/TarjetaIzq";
import Footer from '../../componentes/footer/Footer';


const PaginaPrincipal = () => {
    useEffect(() => {
        document.title = "Tango Restaurante";
    }, []);
    return (
        <>
            <main>
                <Banner></Banner>
                {/* <div className="separator"></div> Elemento separador */}
                <TarjetaDer></TarjetaDer>
                <TarjetaIzq></TarjetaIzq>
                <section className="contenedor-logo d-flex flex-column align-items-center justify-content-center pt-1 pb-1">
                    <figure className="mb-1">
                        <img src="src/img/logo_tango.png" alt="Logo de Tango Restaurante" className="img-fluid" />
                    </figure>
                    <p className="mb-1">Tucumán - Argentina</p>
                </section>
            </main>
            {/* <Footer/> */}
        </>
    );
};

export default PaginaPrincipal;