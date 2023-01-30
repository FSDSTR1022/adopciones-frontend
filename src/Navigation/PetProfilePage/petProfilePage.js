import React from "react";
import { useParams } from "react-router-dom";
import Tittle from '../../Components/Tittle/tittle.js'
import Menu from '../../Components/Menu/menu'
import PetProfile from "../../Components/PetProfile/petProfile";
import Footer from "../../Components/Footer/footer.js";

const PetProfilePage = () => {
    const {slug} = useParams();

    return(
        <>
            <Tittle></Tittle>
            <Menu ></Menu>
            <PetProfile></PetProfile>
            <Footer></Footer>
        </>
    )
}

export default PetProfilePage