import {Row, Col, Container, Image} from "react-bootstrap"; 
import './nosotros.css';
const Nosotros = () => {
  return (
   <div>
    <Container>
        <div>
          <h2 className="titulo">Quiénes Somos</h2>
        </div>
       <Row className="px-4 my-5">
        <Col sm={6}>
        <Image className="img" src="src/assets/img/img-logo1.jpg"
        fluid
        rounded
        />
        </Col>
       <Col sm={6}>
        <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et neque amet ratione voluptatum, obcaecati autem eaque, veritatis fuga temporibus 
        vel nesciunt itaque? Beatae fuga est voluptatibus! Fugiat dolorem illum ut.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus inventore, modi esse asperiores enim, nostrum quae et nam voluptatem commodi autem repellendus quas.
        Fuga iure recusandae aliquid ducimus earum adipisci!
        </p>
       </Col>
      </Row>
    </Container>
   </div>
  )
}

export default Nosotros
