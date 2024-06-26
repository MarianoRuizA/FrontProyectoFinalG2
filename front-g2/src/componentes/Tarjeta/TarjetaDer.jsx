import "./TarjetaDer.css"
import Boton from '../Boton/Boton'

const TarjetaDer = () => {
    return (
        <>
            <section className="section-container-der row align-items-center ">
                <div className="col-md-6 order-md-1 order-2">
                    <div className="section-content p-4">
                        <h2 className="pb-3">¡Te invitamos a disfrutar!</h2>
                        <p className="pb-2">En TANGO, no solo te invitamos a disfrutar de deliciosos platos, sino también a compartir momentos especiales con tus seres queridos en un ambiente acogedor y familiar. ¡Ven y déjanos llevarte en un viaje culinario a Argentina!</p>
                        <div className="boton-content">
                            <Boton buttonText="Reservar"></Boton>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 order-md-2 order-1 p-0">
                    <figure className="image-container m-0">
                        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFyZ2VudGlub3MlMjByZXN0YXVyYW50ZXxlbnwwfHwwfHx8MA%3D%3D" alt="" class="img-fluid w-100" />
                    </figure>
                </div>
            </section>
        </>
    );
};

export default TarjetaDer;