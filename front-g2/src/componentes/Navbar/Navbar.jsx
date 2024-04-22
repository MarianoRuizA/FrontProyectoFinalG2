import { useRef, useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ModalLogin from "../ModalLogin/ModalLogin";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

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
				<img
					src="src/img/logo_tango.png"
					alt="Logo de Tango Restaurante"
					className="logo-tango"
					onClick={() => navegacion("/")} 
				/>
				<button
					className="nav-btn"
					onClick={showNavbar}>
					<FaBars />
				</button>
				<nav ref={navRef}>
					<a onClick={() => navegacion("/galeria")} className="link-underline">GALERÍA</a>
					<a href="https://doroitalianbar.com/wp-content/uploads/2024/04/Menu-Principal-13-4-2024.pdf" target="_blank" className="link-underline">CARTA</a>
					<a onClick={() => navegacion("/nosotros")} className="link-underline">NOSOTROS</a>
					<a onClick={() => navegacion("/reservas")} className="link-underline">RESERVAS</a>

					{user ? (
						<a className="link-login" >
							CERRAR SESIÓN
						</a>
					) : (
						<a className="link-login" onClick={handleShow}>
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
