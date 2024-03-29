import React from "react";
import styles from "./footer.module.css"
import logo from '../../../src/Resources/logoComplete.png'

const Footer = () => {
    return (<div className={styles.footergeneral}>
            <div className={styles.footer1}>
                <div className={styles.filosofia}>
                    <h1>Encuentra a miles de animales en adopción</h1>
                    <h2>¿Estás pensando en adoptar? ¡Pues prueba Adopciones Blue Team!</h2>
                    <h3>En Adopciones Blue Team podrás encontrar cientos de perros, cachorros, gatos, gatitos, hurones, conejos, cobayas, ratas, ratones, chinchillas, jerbos, cerdos reptiles, aves... en adopción procedentes de protectoras y asociaciones de animales o perreras de todo el mundo. ¿Estás buscando adoptar o acoger un animal? ¡Estás en el sitio adecuado! Adopta, salva una vida y gana un amigo con Miwuki Pet Shelter.</h3>
                </div>
                    <div className={styles.imagen}><a href="/"><img src={logo} alt="logo"/></a>
                    <h3>c/ Nyan Cat, 10 29640 Malaga España</h3>
                    <h3>Tel. (+34) 934 170 124</h3>
                    <h3>adopta@adopcionesblueteam.com</h3>
                </div>
                
                
            </div>
            <div className={styles.footer2}>
                <h2>2023 © Una plataforma de <a>Blue Team</a></h2>
                <div className={styles.condiciones}>
                    <h2></h2>
                    <h2></h2>
                    <h2></h2>
                    <h2></h2>
                    <h2><a href="/legalnotice">Aviso legal</a></h2>
                    <h2><a href="/privacypolicy">Política de Privacidad</a></h2>
                    <h2><a href="/cookies">Cookies</a></h2>
                </div> 
            </div>

        </div>
)}

export default Footer