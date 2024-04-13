import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft, faCircleRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import "./galeria.css"
import { useContext, useEffect, useState } from "react"
import { GaleriaProvider } from '../../context/galeriaContext'
import Titulo from '../../componentes/imgCarousel/titulo/titulo'



const Galeria = () => {

    const {imagenes} = useContext(GaleriaProvider)
    let ultInd = (imagenes.length) - 1

    const [imagen, setImagen] = useState({ link: '', nombre: '', i: -1 })
    const [scroll, setScroll] = useState(0)

    const handleClick = (link, nombre, i) => {
        console.log("Current Scroll:", scroll);
        setImagen({ link, nombre, i })
    }

    const handleOpciones = (opcion, i) => {
        let estructura;
        if (opcion === "cerrar") {
            estructura = { link: '', nombre: '', i: -1 };
        } else {
            const nuevoIndex = opcion === "ant" ? (i === 0 ? ultInd : i - 1) : (i === ultInd ? 0 : i + 1);
            estructura = { link: imagenes[nuevoIndex].link, nombre: imagenes[nuevoIndex].nombre, i: nuevoIndex };
        }
        setImagen(estructura)
    }

    useEffect(()=>
    {
        addEventListener("scroll", ()=>
        {
            setScroll(window.scrollY)
        })
    },[])
   
    useEffect(() => {
        const fondo = document.getElementById("sectionGaleria")
        if (imagen.i !== -1) {
            fondo.style.display = "none"
        }else{
            fondo.style.display = "block"
            window.scrollTo(0, scroll); 
        }
    }, [imagen])

    return (
        <>
            {
                imagen.link &&
                <div id="divImagenCarousel">
                    
                    <img src={imagen.link} alt={imagen.nombre} />

                    <button id="btnCerrar" onClick={() => handleOpciones("cerrar", imagen.i)}>
                        <FontAwesomeIcon icon={faCircleXmark} className='iconos' />
                    </button>

                    <button id="btnAnterior" onClick={() => handleOpciones("ant", imagen.i)}
                    >
                        <FontAwesomeIcon icon={faCircleLeft} className='iconos' />
                    </button>

                    <button id="btnSiguiente" onClick={() => handleOpciones("sig", imagen.i)}>
                        <FontAwesomeIcon icon={faCircleRight} className='iconos' />
                    </button>
                  
                </div>
            }
            <main>

                <section id='sectionGaleria'>
                    <Titulo link="https://doroitalianbar.com/wp-content/uploads/2021/08/179-1.jpg" texto="imagen de mesas" nombre="Galería"/>
                    <article className="p-3 m-5">
                        <h3>UN LUGAR QUE HABLA POR SI MISMO…</h3>
                        <h5>Te invitammos a conocer el diseño de una Gatronomia y un ambiente diferente.
                            Su historia, la calidad y la diferenciacion, lo convierten en una de las citas obligadas de la gastronomia de Tucumán.

                        </h5>
                    </article>
                    <article>

                        <div id="divGaleria">

                            {imagenes.map((foto, index) =>
                            (
                                <figure className="col-12 col-sm-6 col-lg-3">

                                    <img src={foto.link}
                                        alt={foto.nombre}
                                        key={index}
                                        onClick={() => handleClick(foto.link, foto.nombre, index)} />
                                </figure>
                            ))}

                        </div>



                    </article>
                </section>


            </main>
        </>

    )
}

export default Galeria