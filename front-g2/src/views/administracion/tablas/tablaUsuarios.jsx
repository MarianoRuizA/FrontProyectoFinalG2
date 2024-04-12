import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleMinus, faPencilSquare, faTrash } from "@fortawesome/free-solid-svg-icons" 
import { Table } from "react-bootstrap"
import { useContext } from "react"
import { UsuarioProvider } from "../../../context/usuariosContext"



const TablaUsuarios = () =>
{
    const {usuarios} = useContext(UsuarioProvider)
    console.log(usuarios, "holaaaaaaaaa")
    return(

        <Table hover striped bordered responsive className="tablaInfo">
            <thead>
                
                <th>ID</th>
                <th>NOMBRE</th>
                <th>EMAIL</th>
                <th>OPCIONES</th>
            </thead>
            <tbody>
                {usuarios.map((usuario) => 
                (
                    <>
                    <tr>
                    <td>{usuario.id}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.email}</td>
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
                    </>
                ))}
                {/* <tr>
                    <td></td>
                    <td></td>
                    <td></td>
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
                </tr> */}
            </tbody>
        </Table>
        )
}

export default TablaUsuarios 