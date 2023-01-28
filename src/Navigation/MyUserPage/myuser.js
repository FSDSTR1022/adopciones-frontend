import React from "react";
import { useParams } from "react-router-dom";
import Tittle from '../../Components/Tittle/tittle.js'
import Menu from '../../Components/Menu/menu'
import Perfil from '../../Components/Perfil/perfil'

const MyUserPage = () => {
    const {slug} = useParams();

    return(
        <>
            <Tittle></Tittle>
            <Menu ></Menu>
            <Perfil></Perfil>
        </>
    )
}

export default MyUserPage