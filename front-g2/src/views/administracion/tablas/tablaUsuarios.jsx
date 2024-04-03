import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleMinus, faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons" 
import { Table } from "react-bootstrap"


const TablaUsuarios = () =>
{
    return(

        <Table hovered striped bordered className="tablaInfo">
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
                    <td className="d-flex justify-content-around p-3">
                        <a href="">
                            <FontAwesomeIcon icon={faPencilSquare} className="iconEditar"/>
                            </a> 

                            <a href="">

                        <FontAwesomeIcon icon={faCircleMinus} className="iconSuspender"/>
                            </a>
                            <a href="">

                        <FontAwesomeIcon icon={faTrash} className="iconEliminar"/>
                            </a>
                    </td>
                </tr>
            </tbody>
        </Table>
        )
}

export default TablaUsuarios 