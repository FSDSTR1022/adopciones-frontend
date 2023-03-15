import React , {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./success.module.css"
import Button from "../Button/button";

const Success = ({profileData, category}) => {
    const {slug} = useParams(); 
    const {id} = useParams()

    return  <>
        <div className={styles.exito}>
            <div className={styles.titulo}>
                <h1>😻 Se ha completado su registro 😻</h1>
            </div>
            <Button texto='Ver mi perfil' span='button4' ruta={`/${category}/${id}`}></Button>
            <hr className={styles.divider}></hr>
            <Button texto='Encontrar mi mascota' span='button5' ruta={`/pets`}></Button>
        </div>
    </>
}

export default Success