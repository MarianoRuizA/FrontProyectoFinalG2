
import Imagen from "./imgGalerias"
import "./galeria.css"


const Galeria = () => {
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
                        <div className="divGaleria">


                            <Imagen link="https://doroitalianbar.com/wp-content/uploads/2021/08/MAE0944-1030x1030.jpg" nombre="Primer plato" />


                            <Imagen link="https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5686-1-1030x1030.jpg" nombre="Barra de servicios" />


                            <Imagen link="https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5032-1030x1030.jpg" nombre="Segundo plato" />



                            <Imagen link="https://doroitalianbar.com/wp-content/uploads/2021/08/MAE0951-1-1030x1030.jpg" nombre="Tercer plato" />

                            <Imagen link="https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5196-1030x1030.jpg" nombre="Cuarto plato" />

                            <Imagen link="https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5057-1030x1030.jpg" nombre="Quinto plato" />

                            <Imagen link="https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5113-1030x1030.jpg" nombre="Sexto plato" />

                            <Imagen link="https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5128-1030x1030.jpg" nombre="Séptimo plato" />

                            <Imagen link="https://doroitalianbar.com/wp-content/uploads/2021/08/IMG-8146-1030x1024.jpg" nombre="Octavo plato" />

                            <Imagen link="src/views/galeria/img/noveno-plato.jpg" nombre="Noveno plato" />

                            <Imagen link="src/views/galeria/img/mesas-bar.jpg" nombre="Mesas" />

                            <Imagen link="src/views/galeria/img/ultimo-plato.jpg" nombre="Décimo plato" />
                        </div>



                    </article>
                </section>

            </main>
        </>

    )
}

export default Galeria