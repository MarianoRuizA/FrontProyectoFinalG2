import { useEffect } from "react";
import FormRegistro from "../../componentes/form/formRegistro/FormRegistro"
import Footer from "../../componentes/footer/Footer";

const Registro = () => {
  useEffect(() => {
    document.title = "Registro";
  }, []);
  return (
    <>
      <main className="mainRegistro">
        <FormRegistro />
      </main>
      <Footer />
    </>
  )
}

export default Registro
