import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Boton.css";
import { useNavigate } from "react-router-dom";

const Boton = ({ buttonText }) => {
    const navegacion = useNavigate()
    return (
        <div className="button-container">
            {buttonText == "Carta"?(<a href="https://doroitalianbar.com/wp-content/uploads/2024/03/Menu-Principal-15-3-2024.pdf" target="_blank">
            <FontAwesomeIcon icon={faArrowRight} className="icon-large" />
            <p className="mb-0">{buttonText}</p>
            </a>):(<a onClick={() => navegacion("/reservas")}>
            <FontAwesomeIcon icon={faArrowRight} className="icon-large" />
            <p className="mb-0">{buttonText}</p>
            </a>)}
         
        </div>
    );
};

export default Boton;
