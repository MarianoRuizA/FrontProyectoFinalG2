import { Col } from "react-bootstrap"
import './titulo.css'


const Titulo = ({titulo, imagen, alt}) =>
{
    return(
        <>
        <main>
            
            <div className="d-flex" id="divTitulo">

                <Col className="titulo">
                    <h1>Reservas</h1>
                </Col>
                <Col className="imgTitulo">

                    <img src="https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5263-579x1030.jpg" alt={alt} />
                    
                </Col>
            </div>

          

        </main>
        </>
    )
}

export default Titulo