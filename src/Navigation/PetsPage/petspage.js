import React from "react";
import { useParams } from "react-router-dom";
import Tittle from '../../Components/Tittle/tittle.js'
import Menu from '../../Components/Menu/menu'
import Parrilla from "../../Components/Parrilla/parrilla.js";

const PetsPage = () => {
    const {slug} = useParams();

    return(
        <>
            <Tittle></Tittle>
            <Menu ></Menu>
            <Parrilla></Parrilla>
        </>
    )
}

export default PetsPage