import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <figure>
        <img src="src/img/logo_tango.png" alt="Logo de Tango Restaurante" className='logo-tango' />
      </figure>
      <button className='abrir-menu'>Abrir Menú</button>
      <nav>
        <ul className='nav-list'>
          <li><a className='link-underline' href="">GALERÍA</a></li>
          <li><a className='link-underline' href="">CONTACTO</a></li>
          <li><a className='link-underline' href="">CARTA</a></li>
          <li><a className='link-underline' href="">RESERVAS</a></li>
          <a href="">
            <img className='login-icon' src="src/img/login_icon.png" alt="" />
          </a>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar