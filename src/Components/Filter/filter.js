import React from "react";
import styles from './filter.module.css'

const ButtonList = ({allTypes, filterType}) => {
    return <>
        <div className={styles.filter}>
            <h2 >Filtros</h2>
         
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