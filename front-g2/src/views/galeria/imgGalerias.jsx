import './galeria.css'
const Imagen = ({ link, nombre }) => {


    return (
        <>
        <figure className="col-12 col-sm-6 col-lg-3">
        

        <img src={link} alt={nombre} />
        
        </figure>
        </>
        


    )
}

export default Imagen