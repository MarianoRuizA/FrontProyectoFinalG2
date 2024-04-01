import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			 <figure>
          <img
            src="src/img/logo_tango.png"
            alt="Logo de Tango Restaurante"
            className="logo-tango"
          />
        </figure>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			<nav ref={navRef}>
				<a href="" className="link-underline">GALERÍA</a>
				<a href="" className="link-underline">CONTACTO</a>
				<a href="" className="link-underline">CARTA</a>
				<a href="" className="link-underline">RESERVAS</a>
        <a href="">
              <img className="login-icon" src="src/img/login_icon.png" alt="Icono del login" />
            </a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
		</header>
	);
}

export default Navbar;
