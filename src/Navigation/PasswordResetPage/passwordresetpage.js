import React from "react";
import { useParams } from "react-router-dom";
import Tittle from '../../Components/Tittle/tittle.js'
import Menu from '../../Components/Menu/menu'
import PasswordReset from "../../Components/PasswordReset/passwordReset";
import Footer from "../../Components/Footer/footer.js";

const PetsPage = () => {
    const {slug} = useParams();

    return(
        <>

            <PasswordReset></PasswordReset>

        </>
    )
}

export default PetsPage