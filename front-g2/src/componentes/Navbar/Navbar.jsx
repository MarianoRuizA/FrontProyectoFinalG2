import { useRef, useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ModalLogin from "../ModalLogin/ModalLogin";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { UsuariosContext } from "../../context/ContextUsuarios";

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

	const { logout } = useContext(UsuariosContext);

	const user = JSON.parse(localStorage.getItem("user"));

	const cerrarMenu = () => {
		navRef.current.classList.remove("responsive_nav");
	};

	return (
		<>
			<header>
				<img
					src="https://i.postimg.cc/pLchhhfT/logo-tango.png"
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
					<a onClick={() => {navegacion("/galeria"); cerrarMenu()}} className="link-underline">GALERÍA</a>
					<a href="https://doroitalianbar.com/wp-content/uploads/2024/04/Menu-Principal-13-4-2024.pdf" onClick={cerrarMenu} target="_blank" className="link-underline">CARTA</a>
					<a onClick={() => {navegacion("/nosotros"); cerrarMenu()}} className="link-underline">NOSOTROS</a>
					<a onClick={() => {navegacion("/reservas"); cerrarMenu()}} className="link-underline">RESERVAS</a>

					{user?.isAdmin ? (
						<a className="link-underline" onClick={() => {navegacion("/admin"); cerrarMenu()}}>
							ADMIN
						</a>
					) : null}

					{user ? (
						<a className="link-login" onClick={() => logout()} >
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
			<ModalLogin show={show} handleClose={handleClose} cerrarMenu={cerrarMenu}  />
		</>
	);
}

export default Navbar;
