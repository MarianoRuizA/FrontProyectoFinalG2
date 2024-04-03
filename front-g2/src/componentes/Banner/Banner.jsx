import "./Banner.css"
import Button from 'react-bootstrap/Button';

const Banner = () => {
    return (
        <>
            <section class="banner">
                <div class="content-banner">
                    <h2>BIENVENIDOS A UNA NUEVA EXPERIENCIA</h2>
                    <h5>¡Reserva tu mesa hoy mismo y descubre la verdadera esencia de la cocina argentina en TANGO!</h5>
                    <Button href="https://doroitalianbar.com/" target="_blank" class="btn btn-lg">Reservar</Button>
                </div>
            </section>
        </>
    );
};

export default Banner;