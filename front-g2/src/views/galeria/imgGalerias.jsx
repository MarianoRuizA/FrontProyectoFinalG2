import './galeria.css'
const Imagen = ({ link, nombre }) => {


    return (
        <>
        <figure className='col-sm-12 col-md-12'>
        

        <img src={link} alt={nombre} />
        
        </figure>
        </>
        


    )
}

export default Imagen