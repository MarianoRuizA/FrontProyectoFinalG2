import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // Cuando esta true, lo pasa a false y viceversa.
    setClicked(!clicked);
  };

  return (
    <header>
      <section className="section-navbar">
        <figure>
          <img
            src="src/img/logo_tango.png"
            alt="Logo de Tango Restaurante"
            className="logo-tango"
          />
        </figure>
        <figure className="contenedor-burger">
          <a clicked={clicked} onClick={handleClick}>
            <img className="burger-icon" src="src/img/burger-menu.svg" alt="" />
          </a>
        </figure>
      </section>
      <nav>
        <ul className={`ul-list ${clicked ? "active" : ""} `}>
          <li>
            <a className="link-underline" href="">
              GALERÍA
            </a>
          </li>
          <li>
            <a className="link-underline" href="">
              CONTACTO
            </a>
          </li>
          <li>
            <a className="link-underline" href="">
              CARTA
            </a>
          </li>
          <li>
            <a className="link-underline" href="">
              RESERVAS
            </a>
          </li>
          <li>
            <a href="">
              <img className="login-icon" src="src/img/login_icon.png" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
