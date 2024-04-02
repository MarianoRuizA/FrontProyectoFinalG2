import './cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';

const CardsGrupo = () => {
  return (
<>
    <div className="team-section">
        <div className="container">
            <div className="row">
                <div className="title">
                    <h2> Nuestro Equipo</h2>
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
                        <p>"Delicadeza en cada plato, pasión en cada bocado."</p>
                    </div>
                    <div className="social">
                    <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook}/></a> 
                    <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a> 
                    <a href="#"><FontAwesomeIcon icon={faTwitter}/></a> 
                    </div>
                </div>

                <div className="card">
                    <div className="img-section">
                        <img src="src/assets/img/integrante2.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Luciano</h3>
                        <h4>Administrador</h4>
                        <p>"Experiencias gastronómicas excepcionales, servicio impecable."</p>
                    </div>
                    <div className="social">
                    <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook}/></a> 
                    <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a> 
                    <a href="#"><FontAwesomeIcon icon={faTwitter}/></a> 
                    </div>
                </div>

                <div className="card">
                    <div className="img-section">
                        <img src="src/assets/img/integrante3.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Mariano</h3>
                        <h4>Dj</h4>
                        <p>"La música es mi lenguaje, las pistas son mi historia."</p>
                    </div>
                    <div className="social">
                    <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook}/></a> 
                    <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a> 
                    <a href="#"><FontAwesomeIcon icon={faTwitter}/></a> 
                    </div>
                </div>

                <div className="card">
                    <div className="img-section">
                        <img src="src/assets/img/integrante4.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Lourdes</h3>
                        <h4>Diseñadora de Interiores</h4>
                        <p>"Estilo que inspira, espacios que encantan."</p>
                    </div>
                    <div className="social">
                    <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook}/></a> 
                    <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a> 
                    <a href="#"><FontAwesomeIcon icon={faTwitter}/></a> 
                    </div>
                </div>

                <div className="card">
                    <div className="img-section">
                        <img src="src/assets/img/integrante5.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Martina</h3>
                        <h4>Adminisradora</h4>
                        <p>"Dirigiendo con pasión, superando expectativas."</p>
                    </div>
                    <div className="social">
                    <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook}/></a> 
                    <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a> 
                    <a href="#"><FontAwesomeIcon icon={faTwitter}/></a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}
export default CardsGrupo
