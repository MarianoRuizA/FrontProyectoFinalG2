import {Row, Col, Container, Image} from "react-bootstrap"; 
const Nosotros = () => {
  return (
    <div className ="nosotros">
        <h2 className ="text">Quiénes Somos</h2>
        <Container>
          <Row>
            <Col>
              texto
            </Col>
            <Col xs={6} md={4} >
            <Image src="src/assets/img/img-logo.jpeg" roundedCircle />
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Nosotros
