import { Container, Col } from "react-bootstrap"
import './titulo.css'

const Titulo = () =>
{
    return(
        <>
        <div className="d-flex flex-column flex-md-row tituloContenedor">
        

            <Col className="d-flex justify-content-center align-items-center" id="tituloIzq"> 
            <h1>RESERVAS
            </h1>
            </Col>
            <Col className="bg-success d-flex justify-content-center align-items-center">
                <img src="https://doroitalianbar.com/wp-content/uploads/2021/08/179-1.jpg" alt="" />
            </Col>
           
        </div>

        <div>
            esto es otro
        </div>
        </>
    )
}

export default Titulo