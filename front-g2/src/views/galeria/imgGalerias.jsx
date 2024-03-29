import { Col, Image } from "react-bootstrap"

const Imagen = ({ link, nombre }) => {
    return (

        
        <Image src={link} alt={nombre} width={400} height={400} col-xs={12} col-sm={9} col-md={6} col-lg={6}/>
        


    )
}

export default Imagen