import imagen from "../../assets/img/integrante1.png";

const CardsGrupo = () => {
  return (
    <div className="card">
        <div className="card-img">
            <img src={imagen} alt="perfil del integrante"/>
        </div>
        <p className="name">Lourdes Reyna</p>
        <p>Diseñadora de Interiores</p>
    </div>
)
}
export default CardsGrupo
