import React from "react";
import { useParams } from "react-router-dom";
import Tittle from '../../Components/Tittle/tittle.js'
import Menu from '../../Components/Menu/menu'
import Bienvenida from "../../Components/Bienvenida/bienvenida.js";
import Footer from "../../Components/Footer/footer";

const HomePage = () => {
    const {slug} = useParams();

    return(
        <>
            <Tittle></Tittle>
            <Menu></Menu>
            <Bienvenida></Bienvenida>
            <Footer></Footer>
        </>
    )
}

export default HomePage