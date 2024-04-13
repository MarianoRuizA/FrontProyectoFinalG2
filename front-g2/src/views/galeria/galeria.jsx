import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft, faCircleRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import "./galeria.css"
import { useContext, useEffect, useState } from "react"
import { GaleriaProvider } from '../../context/galeriaContext'



const Galeria = () => {

    const {imagenes} = useContext(GaleriaProvider)
    let ultInd = (imagenes.length) - 1

    const [imagen, setImagen] = useState({ link: '', nombre: '', i: -1 })

    const handleClick = (link, nombre, i) => {
        setImagen({ link, nombre, i })
    }

    const handleOpciones = (opcion, i) => {
        let estructura
        if (opcion === "ant" && i === 0) {
            estructura = { link: imagenes[ultInd].link, nombre: imagenes[ultInd].nombre, i: ultInd }
        } else {
            if (opcion === "ant") {
                estructura = { link: imagenes[i - 1].link, nombre: imagenes[i - 1].nombre, i: i - 1 }
            } else {
                if (opcion === "sig" && i === (ultInd)) {
                    estructura = { link: imagenes[0].link, nombre: imagenes[0].nombre, i: 0 }
                } else {
                    if (opcion === "sig") {
                        estructura = { link: imagenes[i + 1].link, nombre: imagenes[i + 1].nombre, i: i + 1 }
                    } else {
                        estructura = { link: '', nombre: '', i: -1 }
                    }
                }
            }

        }
        setImagen(estructura)
    }
    useEffect(() => {
        const fondo = document.getElementById("divGaleria")
        if (imagen.i === -1) {
            fondo.style.display = "flex"
        } else {
            fondo.style.display = "none"
        }
        if (imagen.i === 0) {

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

                <section>
                    <article className="p-3">
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