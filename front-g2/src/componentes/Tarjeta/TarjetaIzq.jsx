import "./TarjetaIzq.css"
import Button from 'react-bootstrap/Button';

const TarjetaIzq = () => {
    return (
        <>
            <section class="section-container-izq row align-items-center ">
                <div class="col-md-6 order-md-1 p-0">
                    <figure class="image-container">
                        <img src="https://media.istockphoto.com/id/1159732074/es/foto/empanadas-argentinas-tradicionales-al-horno-con-boller%C3%ADa-salada-con-relleno-de-carne-de-res.jpg?s=612x612&w=0&k=20&c=Vg0HMT09V4gDqXDRQRLKpFSP2xmJ7PmO9WMlap4XdU4=" alt="" class="img-fluid w-100" />
                    </figure>
                </div>
                <div class="col-md-6 order-md-2">
                    <div class="section-content p-4">
                        <h3 class="pb-2">¡Nuestra pasión se refleja en cada plato que servimos!</h3>
                        <p class="pb-1">Nuestra pasión por la cocina se refleja en cada plato que servimos. Utilizamos solo los ingredientes más frescos y de la más alta calidad para crear auténticos manjares argentinos que te harán sentir como si estuvieras en el corazón del país.</p>
                        <div class="boton-content">
                            <Button variant="primary" class="btn btn-md">Carta</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TarjetaIzq;