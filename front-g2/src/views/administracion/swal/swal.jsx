import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { UsuariosContext } from "../../../context/ContextUsuarios";



const SwalDependiente = ({ usuarioEliminar, usuarioSuspender, pedido, setSwal, setSwal2, cantAdmins }) => {

    const { eliminarUsuario, modificarUsuario } = useContext(UsuariosContext)

    useEffect(() => {
        if (usuarioSuspender) {
            modificarUsuario({ ...usuarioSuspender, isSuspended: pedido })
            Swal.fire({
                title: pedido ? "Suspensión exitosa" : "Reanudación exitosa",
                text: pedido ? `Se suspendió al usuario ${usuarioSuspender.nombre}` : `Se reanudó al usuario ${usuarioSuspender.nombre}`,
                icon: "success",
            });
            setSwal2(false)
        }
    }, [usuarioSuspender])

    useEffect(() => {
        if (usuarioEliminar) {
            if (cantAdmins == 1 && usuarioEliminar.isAdmin) {
                Swal.fire({
                    title: "ERROR!",
                    text: "No se puede eliminar al único administrador",
                    icon: "error",
                });
                
            setSwal(false)
            } else {
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
                            icon: "success",
                        });
                    }
                })
                setSwal(false)
            }
            
        }
    }, [usuarioEliminar]
    )

    return (
        <>

        </>
    )
}

export default SwalDependiente