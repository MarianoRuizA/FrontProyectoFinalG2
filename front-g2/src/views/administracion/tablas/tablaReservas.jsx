import { Table } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons" 

const TablaReservas = () =>
{
    return(
        <>

        <Table hovered striped bordered className="tablaInfo">
            <thead>
                
                <th>ID</th>
                <th>USUARIO</th>
                <th>SUCURSAL</th>
                <th>COMENSALES</th>
                <th>FECHA Y HORA</th>
                <th>OPCIONES</th>
            </thead>
            <tbody>
                <tr>
                    <td>1032987</td>
                    <td>marisagmail.com</td>
                    <td>Chacabuco 474</td>
                    <td>6</td>
                    <td>Abril, 24
                        21:00
                    </td>
                    <td className="d-flex justify-content-around p-3">
                        <FontAwesomeIcon icon={faPencilSquare} className="iconEditar"/>

                        <FontAwesomeIcon icon={faTrash} className="iconEliminar"/>
                    </td>
                </tr>
            </tbody>
        </Table>

        </>
    )
}

export default TablaReservas