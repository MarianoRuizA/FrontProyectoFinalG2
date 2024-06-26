import "./TarjetaIzq.css"
import Boton from '../Boton/Boton'

const TarjetaIzq = () => {
    return (
        <>
            <section className="section-container-izq row align-items-center ">
                <div className="col-md-6 order-md-1 p-0">
                    <figure className="image-container m-0">
                        <img src="https://media.istockphoto.com/id/1159732074/es/foto/empanadas-argentinas-tradicionales-al-horno-con-boller%C3%ADa-salada-con-relleno-de-carne-de-res.jpg?s=612x612&w=0&k=20&c=Vg0HMT09V4gDqXDRQRLKpFSP2xmJ7PmO9WMlap4XdU4=" alt="" class="img-fluid w-100" />
                    </figure>
                </div>
                <div className="col-md-6 order-md-2">
                    <div className="section-content p-4">
                        <h2 className="pb-3">¡Nuestra pasión se refleja en cada plato que servimos!</h2>
                        <p className="pb-2">Nuestra pasión por la cocina se refleja en cada plato que servimos. Utilizamos solo los ingredientes más frescos y de la más alta calidad para crear auténticos manjares argentinos que te harán sentir como si estuvieras en el corazón del país.</p>
                        <div className="boton-content">
                            <Boton buttonText="Carta"></Boton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TarjetaIzq;