import React from "react";
import styles from './titulos.module.css'

const Titulos = ({texto, span}) => {
   
    let className = styles[span]

    return  <h1 className={className} >{texto} </h1>

    }
    
export default Titulos