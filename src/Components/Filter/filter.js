import React from "react";
import styles from './filter.module.css'
import Titulos from "../Titulos/titulos";
import Button from "../Button/button";

const ButtonList = ({allTypes, filterType}) => {
    return <>
        <div className={styles.filter}>
            <Titulos texto='Filtros' span='h3'></Titulos>
         
            <div className={styles.types}>
                {allTypes.map(type =>(
                    <button 
                        className={styles.botonFiltro}
                        key={type} 
                        onClick={()=>filterType(type)}
                    >
                    {type}
                    </button>
                ))}

            </div>
        </div>  
    </>
}

export default ButtonList