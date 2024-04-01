import './cards.css';
import imagen3 from "../../assets/img/integrante3.png";
import imagen4 from "../../assets/img/integrante4.png";
import imagen5 from "../../assets/img/integrante5.png";

const CardsGrupo = () => {
  return (
<>
    <div className="card">
        <h2 className="title">Equipo</h2>

        <div className="box-container">
            <div className="box">
                <img src={imagen3} alt="perfil del integrante"/>
                <h3>Mariano Agustin Ruiz</h3>
                <p>Chef Principal</p>
            </div>
        </div>

        <div className="box-container">
            <div className="box">
                <img src={imagen5} alt="perfil del integrante"/>
                <h3>martina</h3>
                <p>Chef Principal</p>
            </div>
        </div>

        <div className="box-container">
            <div className="box">
                <img src={imagen4} alt="perfil del integrante"/>
                <h3>Lourdes Reyna</h3>
                <p>Chef Principal</p>
            </div>
        </div>
    </div>
</>
)
}
export default CardsGrupo
