import { Row, Container, Button } from "react-bootstrap"
import Imagen from "./imgGalerias"
import "./galeria.css"


const Galeria = () => {
    return (
        <>
            <h1>Esto es galeria</h1>
            <main>
                <section>
                    <Container >

                        <Row className="justify-content-center align-content-center flex-wrap">
                            <Imagen link="https://doroitalianbar.com/wp-content/uploads/2021/08/MAE0944-1030x1030.jpg" nombre= "Primer plato" />

                            <Imagen link="https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5032-1030x1030.jpg" nombre= "Segundo plato" />
                            
                            <Imagen link="https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5686-1-1030x1030.jpg" nombre="Barra de servicios"/>

                            <Imagen link= "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE0951-1-1030x1030.jpg" nombre= "Tercer plato" />
                        </Row>
                    </Container>
                    <Button>hola</Button>
                </section>

            </main>
        </>

    )
}

export default Galeria