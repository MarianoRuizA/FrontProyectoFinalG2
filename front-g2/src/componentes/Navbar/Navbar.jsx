import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ModalLogin from "../ModalLogin/ModalLogin";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	return (
		<>
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
					<a onClick={handleShow}>
						<img className="login-icon" src="src/img/login_icon.png" alt="Icono del login" />
					</a>
					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
			</header>
			<ModalLogin show={show} handleClose={handleClose} />
		</>
	);
}

export default Navbar;
