import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons" 
import { Table } from "react-bootstrap"


const Administracion = () =>
{
    return(
        <>
        <h1>Esto es admin</h1>
        <Table hovered striped bordered>
            <thead>
                
                <th>ID</th>
                <th>NOMBRE</th>
                <th>EMAIL</th>
                <th>OPCIONES</th>
            </thead>
            <tbody>
                <tr>
                    <td>23</td>
                    <td>pepe</td>
                    <td>pepeelloro@gmail.com</td>
                    <td className="d-flex justify-content-around">
                        <FontAwesomeIcon icon={faPencilSquare}/>
                        <FontAwesomeIcon icon={faTrash}/>
                    </td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}

export default Administracion