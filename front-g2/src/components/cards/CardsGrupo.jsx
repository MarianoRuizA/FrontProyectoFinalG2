import './cards.css';
import imagen1 from "../../assets/img/integrante1.png";
import imagen2 from "../../assets/img/integrante2.png";
import imagen3 from "../../assets/img/integrante3.png";
import imagen4 from "../../assets/img/integrante4.png";
import imagen5 from "../../assets/img/integrante5.png";

const CardsGrupo = () => {
  return (
<>
    <div className="card">
        <div className="head">
            <div className="circle">
                <div className="img-integrante">
                    <img src={imagen1} alt="perfil del integrante"/>
                </div>
            </div>
        </div>
        <div className="description">
            <h3>Gaston</h3>
            <h4>Chef Principal</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Possimus esse quod eveniet ab adipisci.</p>
        </div>
        <hr />
        <div className="contact">
            <a href="#">Contacto</a>
        </div>
    </div>

    <div className="card">
        <div className="head">
            <div className="circle">
                <div className="img-integrante">
                    <img src={imagen2} alt="perfil del integrante"/>
                </div>
            </div>
        </div>
        <div className="description">
            <h3>Gaston</h3>
            <h4>Chef Principal</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Possimus esse quod eveniet ab adipisci.</p>
        </div>
        <hr />
        <div className="contact">
            <a href="#">Contacto</a>
        </div>
    </div>

    <div className="card">
        <div className="head">
            <div className="circle">
                <div className="img-integrante">
                    <img src={imagen3} alt="perfil del integrante"/>
                </div>
            </div>
        </div>
        <div className="description">
            <h3>Gaston</h3>
            <h4>Chef Principal</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Possimus esse quod eveniet ab adipisci.</p>
        </div>
        <hr />
        <div className="contact">
            <a href="#">Contacto</a>
        </div>
    </div>

    <div className="card">
        <div className="head">
            <div className="circle">
                <div className="img-integrante">
                    <img src={imagen4} alt="perfil del integrante"/>
                </div>
            </div>
        </div>
        <div className="description">
            <h3>Gaston</h3>
            <h4>Chef Principal</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Possimus esse quod eveniet ab adipisci.</p>
        </div>
        <hr />
        <div className="contact">
            <a href="#">Contacto</a>
        </div>
    </div>

    <div className="card">
        <div className="head">
            <div className="circle">
                <div className="img-integrante">
                    <img src={imagen5} alt="perfil del integrante"/>
                </div>
            </div>
        </div>
        <div className="description">
            <h3>Gaston</h3>
            <h4>Chef Principal</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Possimus esse quod eveniet ab adipisci.</p>
        </div>
        <hr />
        <div className="contact">
            <a href="#">Contacto</a>
        </div>
    </div>

</>
)
}
export default CardsGrupo
