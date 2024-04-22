import { useRef, useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ModalLogin from "../ModalLogin/ModalLogin";
import "./Navbar.css";
import { useNavigate } from "react-router";

function Navbar() {
	const navegacion = useNavigate()
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const user = JSON.parse(localStorage.getItem("user"));


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
					<a onClick={navegacion("/galeria")} className="link-underline">GALERÍA</a>
					<a onClick={navegacion("/contacto")} className="link-underline">CONTACTO</a>
					<a onClick={navegacion("/carta")} className="link-underline">CARTA</a>
					<a onClick={navegacion("/reservas")}className="link-underline">RESERVAS</a>

					{user ? (
						<a className="link-login" >
							CERRAR SESIÓN
						</a>
					) : (
						<a className="link-login" onClick={handleShow}>
							{/* <img className="login-icon" src="src/img/login_icon.png" alt="Icono del login" /> */}
							INICIAR SESIÓN
						</a>
					)}
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
