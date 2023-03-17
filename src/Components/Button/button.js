import React from "react";
import styles from './button.module.css'

const Button = ({texto, ruta, span}) => {
   
    let className = styles[span]

    return  <button><a href={ruta} className={className} >{texto} </a></button>

    }
    
export default Button