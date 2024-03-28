import {Row, Col, Container, Image} from "react-bootstrap"; 
const Nosotros = () => {
  return (
   <div className="nosotros">
    <Container fluid>
        <div className="titulo">
            <h2>Quiénes Somos</h2>
        </div>
      <Row>
        <Col sm={6}>
         Image
        </Col>
       <Col sm={6}>
         texto
       </Col>
      </Row>
    </Container>
   </div>
  )
}

export default Nosotros
