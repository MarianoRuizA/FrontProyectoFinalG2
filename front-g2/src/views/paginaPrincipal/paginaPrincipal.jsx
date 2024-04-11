import "./paginaPrincipal.css"
import Banner from "../../componentes/Banner/Banner";
import TarjetaDer from "../../componentes/Tarjeta/TarjetaDer";
import TarjetaIzq from "../../componentes/Tarjeta/TarjetaIzq";

const PaginaPrincipal = () => {
    return (
        <>
            <main>
                <Banner></Banner>
                {/* <div className="separator"></div> Elemento separador */}
                <TarjetaDer></TarjetaDer>
                <TarjetaIzq></TarjetaIzq>
                <section class="contenedor-logo d-flex flex-column align-items-center justify-content-center pt-1 pb-1">
                    <figure class="mb-1">
                        <img src="src/img/logo_tango.png" alt="Logo de Tango Restaurante" class="img-fluid" />
                    </figure>
                    <p class="mb-1">Tucumán - Argentina</p>
                </section>
            </main>
        </>
    );
};

export default PaginaPrincipal;