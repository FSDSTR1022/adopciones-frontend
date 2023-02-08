import React from "react";
import styles from "./tittle.module.css"
import logoName from '../../../src/Resources/logoName.png'
import logoCat from '../../../src/Resources/logoCat.png'

const Tittle = () => {
    return  <>
        <div className={styles.cabecera}>
            <div id="titulo"><a href="/"><img src={logoName} className={styles.logoName} alt="logo"/></a></div>
        </div>
        <div><a href="/"><img src={logoCat} className={styles.logoCat} alt="logo"/></a></div>
        </>
}

export default Tittle