import React from "react";
import styles from './myProfile.module.css'

const myProfile = ({texto, span, userID}) => {
   
    let className = styles[span]
    let url = `/users/${userID}`

    return  <a href={url} className={className} >{texto} </a>
    }
    
export default myProfile