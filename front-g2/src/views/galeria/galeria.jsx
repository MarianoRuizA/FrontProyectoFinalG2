
import Imagen from "./imgGalerias"
import "./galeria.css"
import { useEffect, useState } from "react"


const Galeria = () => {

    const imagenes = [
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE0944-1030x1030.jpg",
            nombre: "Primer plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5686-1-1030x1030.jpg",
            nombre: "Barra de servicios"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5032-1030x1030.jpg",
            nombre: "Segundo plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE0951-1-1030x1030.jpg",
            nombre: "Tercer plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5196-1030x1030.jpg",
            nombre: "Cuarto plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5057-1030x1030.jpg",
            nombre: "Quinto plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5113-1030x1030.jpg",
            nombre: "Sexto plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5128-1030x1030.jpg",
            nombre: "Séptimo plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/IMG-8146-1030x1024.jpg",
            nombre: "Octavo plato"
        },
        {
            link: "src/views/galeria/img/noveno-plato.jpg",
            nombre: "Noveno plato"
        },
        {
            link: "src/views/galeria/img/mesas-bar.jpg",
            nombre: "Mesas del bar"
        },
        {
            link: "src/views/galeria/img/ultimo-plato.jpg",
            nombre: "Décimo plato"
        }
    ]

    const [imagen, setImagen] = useState({ link: '', nombre: '', i: -1 })

    const handleClick = (link, nombre, i) => {
        setImagen({ link, nombre, i })
    }

    const handleOpciones = (opcion, i) => {
        let estructura
        let ultInd = (imagenes.length) - 1
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
                    <img src={imagen.link} alt={imagen.nombre}/>

                    <button id="btnCerrar" onClick={() => handleOpciones("cerrar", imagen.i)}>
                        X
                    </button>

                    <button id="btnAnterior" onClick={() => handleOpciones("ant", imagen.i)}
                    >
                        anterior
                    </button>

                    <button id="btnSiguiente" onClick={() => handleOpciones("sig", imagen.i)}>
                        siguiente
                    </button>
                </div>
            }
            <h1>Esto es galeria</h1>
            <main>

                <section>
                    <article className="m-3 p-3">
                        <h3>UN LUGAR QUE HABLA POR SI MISMO…</h3>
                        <h5>Te invitammos a conocer el diseño de una Gatronomia y un ambiente diferente.
                            Su historia, la calidad y la diferenciacion, lo convierten en una de las citas obligadas de la gastronomia de Tucumán.

                        </h5>
                    </article>
                    <article>

                        <div id="divGaleria" >

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