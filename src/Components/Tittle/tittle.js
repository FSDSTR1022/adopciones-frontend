import React from "react";
import "./tittle.css"
import logo from '../../../src/logoadopciones.png'

const Tittle = () => {
    return  <div className="cabecera">
                <div></div>
                <div className="titulo"><h1>Azul Adopciones</h1></div>
                <img src={logo} className='logo' alt="logo" />
            </div>
}

export default Tittle