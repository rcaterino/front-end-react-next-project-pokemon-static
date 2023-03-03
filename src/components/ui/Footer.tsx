import { Container } from "@nextui-org/react"
import Link from "next/link"


export const Footer = () => {
    return (
        <Container>
            <h6>Realizado por Ricardo Caterino</h6>
            <p>Este es un proyecto realizado con fines de estudio durante mi curso sobre Next.js, impartido por Fernando Herrera en la plataforma <Link target='_blank' href="http://www.udemy.com">Udemy.com</Link></p>
            <br/>

            <p>Durante este proyecto en particular aprendimos a generar de manera estática nuestra aplicación, algo beneficioso en los casos donde sabemos de antemano la información que necesitamos generar de manera estática y que sabemos no va a cambiar. Tambien aprendimos a interacturar con el localStorage aunque la aplicación se generase de manera estática; además, implementamos enrutamiento dinámico utilizando para ello elnombre del pokemon y también con el name para mostrar la información detallada del pokemon. Implementamos una pantalla de favoritos para listar los favoritos guardados en localStorage, utilizamos una librería externa llamada Canvas-Confetti para aplicar animación de confetis cuando el pokemon está incluido en favoritos y finalizando el proyecto optimizamos la data necesaria del pokémon para mejorar nuestra aplicación y mejorar nuestro contenido estático de la aplicación.</p>
        </Container>
    )
}
