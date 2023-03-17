import React from "react";
import styles from "./bienvenida.module.css"
import Button from "../Button/button";
import petsPortada from '../../../src/Resources/petsPortada.jpeg'



const Bienvenida = () => {
    return <div className={styles.wellcome}>
                <div className={styles.contenedorFoto}>
                    <img src={petsPortada}
                    alt='' className={styles.foto}/>
                </div>                
                <div className={styles.disclosure}>
                    <h1 >Ayúdanos a encontrar un hogar para los peludos</h1>

                    <Button texto='Comenzar' ruta='/pets' span='button2'></Button>

                </div>
            </div>
}

export default Bienvenida