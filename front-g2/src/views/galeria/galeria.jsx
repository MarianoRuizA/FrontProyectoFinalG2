
import Imagen from "./imgGalerias"
import "./galeria.css"
import CarouselGaleria from "./carousel/carousel"
import { useState } from "react"


const Galeria = () => {

    const imagenes = [
        { link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE0944-1030x1030.jpg",
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
    
    const [indice, setIndice] = useState(0)
    const handleSeleccion = (id) => {
        setIndice(id)
    }

    return (
        <>
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

                        <div className="divGaleria" >

                            {imagenes.map ((foto, index) =>
                            (
                                <Imagen 
                                key = {index}
                                indice = {index}
                                link = {foto.link}
                                nombre = {foto.nombre}
                                />
                            ))}

                        </div>



                    </article>
                </section>
                
                
            </main>
        </>

    )
}

export default Galeria