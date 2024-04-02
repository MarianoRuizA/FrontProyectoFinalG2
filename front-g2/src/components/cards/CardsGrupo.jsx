import './cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const CardsGrupo = () => {
  return (
<>
    <div className="team-section">
        <div className="container">
            <div className="row">
                <div className="title">
                    <h2>Equipo</h2>
                </div>
            </div>

            <div className="team-card">
                <div className="card">
                    <div className="img-section">
                        <img src="src/assets/img/integrante1.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Gastón</h3>
                        <h4>Chef Principal</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Doloribus voluptates ducimus laudantium nam nemo accusantium ipsa!</p>
                    </div>
                    <div className="contact">
                    <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>

                <div className="card">
                    <div className="img-section">
                        <img src="src/assets/img/integrante2.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Gastón</h3>
                        <h4>Chef Principal</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Doloribus voluptates ducimus laudantium nam nemo accusantium ipsa!</p>
                    </div>
                    <div className="contact">
                        <a href="#">Contacto</a>
                    </div>
                </div>

                <div className="card">
                    <div className="img-section">
                        <img src="src/assets/img/integrante3.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Gastón</h3>
                        <h4>Chef Principal</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Doloribus voluptates ducimus laudantium nam nemo accusantium ipsa!</p>
                    </div>
                    <div className="contact">
                        <a href="#">Contacto</a>
                    </div>
                </div>

                <div className="card">
                    <div className="img-section">
                        <img src="src/assets/img/integrante4.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Gastón</h3>
                        <h4>Chef Principal</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Doloribus voluptates ducimus laudantium nam nemo accusantium ipsa!</p>
                    </div>
                    <div className="contact">
                        <a href="#">Contacto</a>
                    </div>
                </div>

                <div className="card">
                    <div className="img-section">
                        <img src="src/assets/img/integrante5.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Gastón</h3>
                        <h4>Chef Principal</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Doloribus voluptates ducimus laudantium nam nemo accusantium ipsa!</p>
                    </div>
                    <div className="contact">
                        <a href="#">Contacto</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}
export default CardsGrupo
