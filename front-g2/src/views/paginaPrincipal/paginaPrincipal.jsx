import "./paginaPrincipal.css"
import Banner from "../../componentes/Banner/Banner";
import TarjetaDer from "../../componentes/Tarjeta/TarjetaDer";
import TarjetaIzq from "../../componentes/Tarjeta/TarjetaIzq";

const PaginaPrincipal = () => {
    return (
        <>
            <main>
                <Banner></Banner>
                <TarjetaDer></TarjetaDer>
                <TarjetaIzq></TarjetaIzq>
                <section class="contenedor-logo d-flex flex-column align-items-center justify-content-center">
                    <figure>
                        <img src="src/img/logo_tango.png" alt="Logo de Tango Restaurante" class="img-fluid" />
                    </figure>
                    <h3>Tucumán - Argentina</h3>
                </section>
            </main>
        </>
    );
};

export default PaginaPrincipal;