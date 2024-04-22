import { useEffect } from "react";
import FormRegistro from "../../componentes/form/formRegistro/FormRegistro"

const Registro = () => {
  useEffect(() => {
    document.title = "Registro";
  }, []);
  return (
    <>
      <FormRegistro />
    </>
  )
}

export default Registro
