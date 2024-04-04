import { Container, Col } from "react-bootstrap"
import './titulo.css'

const Titulo = ({link, texto}) =>
{
    return(
        <>
        <div className="d-flex flex-column flex-md-row tituloContenedor">
        

            <Col className="d-flex justify-content-center align-items-center" id="tituloIzq"> 
            <h1>RESERVAS
            </h1>
            </Col>
            <Col className="bg-success d-flex justify-content-center align-items-center">
                <img src={link} alt={texto} />
            </Col>
           
        </div>
        </>
    )
}

export default Titulo