import React from "react";
import { useParams } from "react-router-dom";
import Tittle from '../../Components/Tittle/tittle.js'
import Menu from '../../Components/Menu/menu'
import Success from '../../Components/Success/success'
import Footer from "../../Components/Footer/footer.js";


const SuccessPage = () => {
    const {slug} = useParams();

    return(
        <>
            <Tittle></Tittle>
            <Menu ></Menu>
            <Success></Success>
            <Footer></Footer>
        </>
    )
}

export default SuccessPage