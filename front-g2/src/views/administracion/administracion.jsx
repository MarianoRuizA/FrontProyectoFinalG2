import Swal from "sweetalert2"

const Administracion = () =>
{
   const eliminarFuncion = () =>
   {
    Swal.fire({
        title: "¿Estás seguro de eliminar a NOMBRE?",
        text: "¡No podrás revertir esta acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Usuario eliminado",
            text: "Usuario correctamente eliminado de la base de datos.",
            icon: "success"
          });
        }
      });
   }
    return(
        <>
        <h1>Esto es admin</h1>
        
        </>
    )
}

export default Administracion