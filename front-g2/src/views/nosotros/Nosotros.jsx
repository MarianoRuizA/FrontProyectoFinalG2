import './nosotros.css';
import imagen from "../../assets/img/imagen.png"

const Nosotros = () => {
  return (
   <div className="seccion">
    <div className="contenedor">
      <div className="contenido-seccion">
        <div className="titulo">
          <h1>Nosotros</h1>
        </div>
        <div className="contenido-nosotros">
          <h3>nuestra historia</h3>
           <p>En una esquina bulliciosa del barrio de San Telmo en Buenos Aires, cinco jóvenes emprendedores decidieron abrir un restaurante con un nombre que evocaba la esencia de su país: "Tango". 
             Cada uno de ellos había crecido inmerso en la cultura argentina del tango y la pasión por la gastronomía local.</p>

            <p>Desde el momento en que abrieron las puertas, el restaurante Tango se convirtió en un éxito instantáneo.
             Los aromas tentadores de empanadas recién horneadas y carnes jugosas a la parrilla flotaban en el aire, atrayendo a los clientes de todas partes de la ciudad y más allá. 
             Pero lo que realmente hacía especial a Tango era la energía contagiosa que emanaba de los cinco amigos.</p> 

            <p>Con el tiempo, Tango se convirtió en mucho más que un simple restaurante, se convirtió en un lugar donde la comida, la música y la camaradería se fusionaban para crear una experiencia inolvidable.
             Y mientras los cinco amigos continuaban compartiendo su pasión con el mundo, la leyenda del restaurante Tango seguía creciendo, una noche de tango a la vez.</p>
        </div>
      </div>
     <div className="img-nosotros">
      <img src={imagen} alt='ilustracion del restaurante' />
     </div>
    </div>
  </div>
)
}
export default Nosotros
