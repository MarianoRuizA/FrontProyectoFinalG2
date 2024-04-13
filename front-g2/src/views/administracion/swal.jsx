import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { UsuarioProvider } from "../../context/usuariosContext";

const SwalDependiente = ({ usuarioEliminar, usuarioSuspender, pedido }) => {

    const { eliminarUsuario, modificarUsuario } = useContext(UsuarioProvider)

    useEffect(() => {
        if (usuarioSuspender) {
            modificarUsuario({...usuarioSuspender, isSuspended: pedido})
            Swal.fire({
                title: pedido?"Suspensión exitosa":"Reanudación exitosa",
                text: pedido?`Se suspendió al usuario ${usuarioSuspender.nombre}`:`Se reanudó al usuario ${usuarioSuspender.nombre}`,
                icon: "success"
            });
        }
    }, [usuarioSuspender])

    useEffect(() => {
        if (usuarioEliminar) {

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
        }
    }, [usuarioEliminar]
    )

    return (
        <>

        </>
    )
}

export default SwalDependiente