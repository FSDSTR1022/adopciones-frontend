import React from "react";
import "./footer.css"
import logo from '../../../src/Resources/logoComplete.png'
import {Link} from 'react-router-dom'

const Footer = () => {
    return  <>
        <div className="footergeneral">
            <div className="footer1">
                <div className="filosofia">
                    <h1>Encuentra a miles de animales en adopción</h1>
                    <h2>¿Estás pensando en adoptar? ¡Pues prueba Azul Adopciones!</h2>
                    <h3>En Miwuki podrás encontrar cientos de perros, cachorros, gatos, gatitos, hurones, conejos, cobayas, ratas, ratones, chinchillas, jerbos, cerdos reptiles, aves... en adopción procedentes de protectoras y asociaciones de animales o perreras de todo el mundo. ¿Estás buscando adoptar o acoger un animal? ¡Estás en el sitio adecuado! Adopta, salva una vida y gana un amigo con Miwuki Pet Shelter.</h3>
                </div>
                <div className="imagen"><a href="/"><img src={logo} alt="logo"/></a></div>
            </div>
            <div className="footer2">
                <h2>2023 © Una plataforma de AzulTeam</h2>
                <div id="condiciones">
                    <h2><a href="/terms">Términos y condiciones de uso</a></h2>
                    <h2><a href="/privacy">Política de Privacidad</a></h2>
                    <h2><a href="/cookies">Cookies</a></h2>
                    <h2><a href="/faq">FAQ</a></h2>
                </div>
            </div>

        </div>

        </>
}

export default Footer