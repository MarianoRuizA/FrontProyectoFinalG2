import "./Banner.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navegacion = useNavigate()
    return (
        <>
            <section className="banner">
                <div className="content-banner">
                    <h2>BIENVENIDOS A UNA NUEVA EXPERIENCIA</h2>
                    <h5>¡Reserva tu mesa hoy mismo y descubre la verdadera esencia de la cocina argentina en TANGO!</h5>
                    <Button onClick={() => navegacion("/reservas")} class="btn btn-lg">Reservar</Button>
                </div>
            </section>
        </>
    );
};

export default Banner;