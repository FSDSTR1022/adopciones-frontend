import React from "react";
import { useParams } from "react-router-dom";
import Tittle from '../../Components/Tittle/tittle.js'
import Menu from '../../Components/Menu/menu'
import Parrilla from "../../Components/Parrilla/parrilla.js";
import Footer from "../../Components/Footer/footer.js";

const PetsPage = () => {
    const {slug} = useParams();

    return(
        <>
            <Tittle></Tittle>
            <Menu ></Menu>
            <Parrilla></Parrilla>
            <Footer></Footer>
        </>
    )
}

export default PetsPage