import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { ReservasContext } from "../../../context/ContextReservas";


const SwalDependiente2 = ({ reservaEliminar, setSwal }) => {

    const { eliminarReserva } = useContext(ReservasContext)

    useEffect(() => {
            Swal.fire({
                title: `¿Estás seguro la reserva de ${reservaEliminar.usuario}?`,
                text: "¡No podrás revertir esta acción!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                cancelButtonText: "Cancelar",
                confirmButtonText: "Sí, eliminar"
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarReserva(reservaEliminar)
                    Swal.fire({
                        title: "Reserva eliminada",
                        text: "Reserva correctamente eliminado de la base de datos.",
                        icon: "success",
                    });
                }
            })
            setSwal(false)
    }, []
    )

    return (
        <>

        </>
    )
}

export default SwalDependiente2