import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Boton.css";

const Boton = ({ buttonText }) => {
    return (
        <div className="button-container">
            <a href="">
            <FontAwesomeIcon icon={faArrowRight} className="icon-large" />
            <p className="mb-0">{buttonText}</p>
            </a>
            {/* <a href="" className="mb-0">{buttonText}</a> */}
        </div>
    );
};

export default Boton;
