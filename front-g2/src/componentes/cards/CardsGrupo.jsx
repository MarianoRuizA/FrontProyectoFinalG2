import './cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from "react-router-dom";
const CardsGrupo = () => {
 
  const navegacion = useNavigate()
 return (
<>
    <div className="team-section">
        <div className="containerNosotros">
            <div className="rowNosotros">
                <div className="title">
                    <h2> Nuestro Equipo</h2>
                </div>
            </div>

            <div className="team-card">
                <div className="card">
                    <div className="img-section">
                        <img src="https://i.postimg.cc/fbbPCFSC/integrante1.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Gastón</h3>
                        <h4>Chef Principal</h4>
                        <p>"Delicadeza en cada plato, pasión en cada bocado."</p>
                    </div>
                    <div className="social">
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faInstagram}/></a>
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faFacebook}/></a> 
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faLinkedin}/></a> 
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faTwitter}/></a> 
                    </div>
                </div>

                <div className="card">
                    <div className="img-section">
                        <img src="https://i.postimg.cc/Rhwpqx2S/integrante2.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Luciano</h3>
                        <h4>Recursos Humanos</h4>
                        <p>"Nuestro talento, nuestro activo; cultivando un equipo, forjando éxito."</p>
                    </div>
                    <div className="social">
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faInstagram}/></a>
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faFacebook}/></a> 
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faLinkedin}/></a> 
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faTwitter}/></a> 
                    </div>
                </div>

                <div className="card">
                    <div className="img-section">
                        <img src="https://i.postimg.cc/zfPccjnr/integrante3.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Mariano</h3>
                        <h4>Marketing</h4>
                        <p>"Ideas que inspiran, estrategias que triunfan."</p>
                    </div>
                    <div className="social">
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faInstagram}/></a>
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faFacebook}/></a> 
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faLinkedin}/></a> 
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faTwitter}/></a> 
                    </div>
                </div>

                <div className="card">
                    <div className="img-section">
                        <img src="https://i.postimg.cc/bJ7FzwCV/integrante4.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Lourdes</h3>
                        <h4>Diseñadora de Interiores</h4>
                        <p>"Estilo que inspira, espacios que encantan."</p>
                    </div>
                    <div className="social">
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faInstagram}/></a>
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faFacebook}/></a> 
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faLinkedin}/></a> 
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faTwitter}/></a> 
                    </div>
                </div>

                <div className="card">
                    <div className="img-section">
                        <img src="https://i.postimg.cc/k46p3bct/integrante5.png" alt="perfil"/>
                    </div>
                    <div className="content">
                        <h3>Martina</h3>
                        <h4>Administradora</h4>
                        <p>"Dirigiendo con pasión, superando expectativas."</p>
                    </div>
                    <div className="social">
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faInstagram}/></a>
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faFacebook}/></a> 
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faLinkedin}/></a> 
                    <a onClick={() => navegacion("error")}><FontAwesomeIcon icon={faTwitter}/></a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}
export default CardsGrupo
