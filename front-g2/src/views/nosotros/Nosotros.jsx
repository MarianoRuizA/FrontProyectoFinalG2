import { useEffect } from 'react'
import About from "../../componentes/about/About"
import CardsGrupo from "../../componentes/cards/CardsGrupo"
import Titulo from "../../componentes/titulo/titulo"
import Footer from '../../componentes/footer/Footer'

const Nosotros = () => {
  useEffect(() => {
    document.title = "Sobre Nosotros";
  }, []);
  return (
    <>
    <Titulo link={"https://images.unsplash.com/photo-1545659531-9a66f06e260a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} nombre={"Nosotros"} texto={"Foto en blanco y negor de un chef cocinando vestido de delantal, goro y guantes"}/>
      <About />
      <CardsGrupo />
      <Footer/>
    </>
  )
}

export default Nosotros
