import "./error404.css";
import Button from 'react-bootstrap/Button';

const Error404 = () => {
    return (
        <div className="container">
                <h2>¡UPS!</h2>
            <figure className="image-container">
                <img src="src/img/logoError404.png" alt="Logo de error 404" className="img-fluid" />
            </figure>
            <div className="text-center">
                <h1>PÁGINA NO ENCONTRADA</h1>
                <p>Lo sentimos, no se pudo encontrar la página que solicitaste</p>
                <Button variant="primary">Volver a inicio</Button>{' '}
            </div>
        </div>
    );
};

export default Error404;

