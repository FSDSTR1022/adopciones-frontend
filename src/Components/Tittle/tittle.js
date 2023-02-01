import React from "react";
import "./tittle.css"
import logo from '../../../src/logoadopciones.png'
import {Link} from 'react-router-dom'

const Tittle = () => {
    return  <>
        <div className="cabecera">
            <div id="titulo"><a href="/"><h1>Azul Adopciones</h1></a></div>
        </div>
        <div><a href="/"><img src={logo} className='logo' alt="logo"/></a></div>
        </>
}

export default Tittle