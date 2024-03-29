import {Row, Col, Container, Image} from "react-bootstrap"; 
const Nosotros = () => {
  return (
   <div className="nosotros">
    <Container>
        <div className="titulo">
            <h2>Quiénes Somos</h2>
        </div>
      <Row className="px-4 my-5">
        <Col sm={7}>
        <Image src="src/assets/img/img-logo1.jpg"
        fluid
        rounded
        />
        </Col>
       <Col sm={5}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et neque amet ratione voluptatum, obcaecati autem eaque, veritatis fuga temporibus 
        vel nesciunt itaque? Beatae fuga est voluptatibus! Fugiat dolorem illum ut.</p>
       </Col>
      </Row>
    </Container>
   </div>
  )
}

export default Nosotros
