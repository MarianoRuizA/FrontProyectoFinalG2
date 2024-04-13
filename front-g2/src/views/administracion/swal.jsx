import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { UsuarioProvider } from "../../context/usuariosContext";

const SwalDependiente = ({ usuarioEliminar }) => {

    const {eliminarUsuario} = useContext(UsuarioProvider)

    useEffect(()=>
    {
        Swal.fire({
            title: `¿Estás seguro de eliminar a ${usuarioEliminar.nombre}?`,
        text: "¡No podrás revertir esta acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sí, eliminar"
    }).then((result) => {
    if (result.isConfirmed) {
        eliminarUsuario(usuarioEliminar)
            Swal.fire({
                title: "Usuario eliminado",
                text: "Usuario correctamente eliminado de la base de datos.",
                icon: "success"
            });
    }
    })
    }, [usuarioEliminar]
    )
   
    return (
        <>
          
        </>
    )
}

export default SwalDependiente