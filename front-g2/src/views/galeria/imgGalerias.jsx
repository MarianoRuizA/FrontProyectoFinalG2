
import { Carousel } from 'react-bootstrap'
import './galeria.css'
import CarouselGaleria from './carousel/carousel'
const Imagen = ({ indice, link, nombre }) => {

    const handleSelected = () =>
    {
        return(

            <CarouselGaleria indice = {indice}/>
            )
        
    }
    return (

        <>
        <figure className="col-12 col-sm-6 col-lg-3">
        

        <img src={link} alt={nombre} onClick={()=>handleSelected(indice)}/>
        
        </figure>
        </>
        


    )
}

export default Imagen