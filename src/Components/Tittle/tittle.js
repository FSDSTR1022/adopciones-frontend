import React from "react";
import "./tittle.css"
import logoName from '../../../src/Resources/logoName.png'
import logoCat from '../../../src/Resources/logoCat.png'
import {Link} from 'react-router-dom'

const Tittle = () => {
    return  <>
        <div className="cabecera">
            <div id="titulo"><a href="/"><img src={logoName} className='logoName' alt="logo"/></a></div>
        </div>
        <div><a href="/"><img src={logoCat} className='logoCat' alt="logo"/></a></div>
        </>
}

export default Tittle