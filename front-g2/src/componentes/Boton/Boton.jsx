import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Boton.css";
import { useNavigate } from "react-router";

const Boton = ({ buttonText }) => {
    const navegacion = useNavigate()
    return (
        <div className="button-container">
            {buttonText == "carta"?(<a href="https://doroitalianbar.com/wp-content/uploads/2024/03/Menu-Principal-15-3-2024.pdf">
            <FontAwesomeIcon icon={faArrowRight} className="icon-large" />
            <p className="mb-0">{buttonText}</p>
            </a>):(<a onClick={navegacion("/reservas")}>
            <FontAwesomeIcon icon={faArrowRight} className="icon-large" />
            <p className="mb-0">{buttonText}</p>
            </a>)}
            {/* <a href="" className="mb-0">{buttonText}</a> */}
        </div>
    );
};

export default Boton;
