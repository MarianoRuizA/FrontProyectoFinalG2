import { Button } from "react-bootstrap";
import "./administracion.css"
import { useState, useEffect } from "react"
import TablaUsuarios from "../../componentes/tablas/tablaUsuarios";

const Administracion = () => {
  const [opcion, setOpcion] = useState(1)

  useEffect(() => {
    document.title = "Administración";
  }, []);

  return (
    <>
      <main>
        <section>
        <h1>Administración</h1>
          <div className="mb-5 ms-3">
            <Button className="me-3 btnAdmin" onClick={()=>{setOpcion(1)}}>Usuarios</Button>
            <Button className="btnAdmin" onClick={()=>{setOpcion(0)}}>Reservas</Button>
          </div>
        {opcion? (<TablaUsuarios/>):(<TablaReservas/>)
        }
        
          
        </section>
      </main>
    </>
  )
}

export default Administracion