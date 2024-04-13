import { createContext } from "react";

export const GaleriaProvider = createContext()

const GaleriaContext = ({children}) =>
{
    const imagenes = [
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE0944-1030x1030.jpg",
            nombre: "Primer plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5686-1-1030x1030.jpg",
            nombre: "Barra de servicios"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5032-1030x1030.jpg",
            nombre: "Segundo plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE0951-1-1030x1030.jpg",
            nombre: "Tercer plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5196-1030x1030.jpg",
            nombre: "Cuarto plato"
        },
        {
            link: "src/views/galeria/img/mas-mesas-de-bar.jpg",
            nombre: "Quinto plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5113-1030x1030.jpg",
            nombre: "Quinto plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5128-1030x1030.jpg",
            nombre: "Sexto plato"
        },
        {
            link: "src/views/galeria/img/bar-por-fuera.jpg",
            nombre: "Arquitectura del restaurant"
        },
        {
            link: "src/views/galeria/img/noveno-plato.jpg",
            nombre: "Séptimo plato"
        },
        {
            link: "src/views/galeria/img/mesas-bar.jpg",
            nombre: "Mesas del bar"
        },
        {
            link: "src/views/galeria/img/ultimo-plato.jpg",
            nombre: "Octavo plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/IMG-8146-1030x1024.jpg",
            nombre: "Noveno plato"
        },
        {
            link: "https://doroitalianbar.com/wp-content/uploads/2021/08/MAE5057-1030x1030.jpg",
            nombre: "Décimo plato"
        },
        {
            link: "src/views/galeria/img/picada.jpg",
            nombre: "Picada de fiambre"
        },
        {
            link: "src/views/galeria/img/plato-de-fideos.jpg",
            nombre: "Onceavo plato"
        }
    ]
    
    return(
        <GaleriaProvider.Provider value={{imagenes}}>
            {children}
        </GaleriaProvider.Provider>
    )
}

export default GaleriaContext