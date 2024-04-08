import "./formRegistro.css"

const FormRegistro = () => {
  return (
    <div className="registro-container">
      <div className="registro-info">
        <h2 className="title">Crea una cuenta</h2>
        <form className="inputs-container">
          <input className="input" type="text" placeholder="Nombre" />
          <input className="input" type="email" placeholder="Email" />
          <input className="input" type="password" placeholder="Contraseña" />
          <button className="btn">registrate</button>
        </form>
      </div>
      <img className="img-container" src="src/assets/img/img-ilustrativo.png" alt="img" />  
    </div>
  )
}

export default FormRegistro
