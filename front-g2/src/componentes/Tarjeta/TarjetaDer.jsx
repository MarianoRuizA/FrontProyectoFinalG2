import "./TarjetaDer.css"
import Button from 'react-bootstrap/Button';

const TarjetaDer = () => {
    return (
        <>
            <section class="section-container-der row align-items-center pt-4 pb-2">
                <div class="col-md-6 order-md-1">
                    <div class="section-content p-4">
                        <h3 class="pb-2">¡Te invitamos a disfrutar!</h3>
                        <p class="pb-1">En TANGO, no solo te invitamos a disfrutar de deliciosos platos, sino también a compartir momentos especiales con tus seres queridos en un ambiente acogedor y familiar. ¡Ven y déjanos llevarte en un viaje culinario a Argentina!</p>
                        <div class="boton-content">
                            <Button variant="primary" class="btn btn-md">Reservar</Button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 order-md-2 p-0">
                    <figure class="image-container">
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFyZ2VudGlub3MlMjByZXN0YXVyYW50ZXxlbnwwfHwwfHx8MA%3D%3D" alt="" class="img-fluid w-100" />
                    </figure>
                </div>
            </section>
        </>
    );
};

export default TarjetaDer;