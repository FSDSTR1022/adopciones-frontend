import React from "react";
import { useParams } from "react-router-dom";
import Tittle from '../../Components/Tittle/tittle.js'
import Menu from '../../Components/Menu/menu'
import RegistrationForm from '../../Components/RegistrationForm/registrationform'
import Footer from "../../Components/Footer/footer.js";


const RegistrationPage = () => {
    const {slug} = useParams();

    return(
        <>
            <Tittle></Tittle>
            <Menu ></Menu>
            <RegistrationForm></RegistrationForm>
            <Footer></Footer>
        </>
    )
}

export default RegistrationPage