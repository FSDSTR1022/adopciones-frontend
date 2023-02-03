import React from "react";
import { useParams } from "react-router-dom";
import Tittle from '../../Components/Tittle/tittle.js'
import Menu from '../../Components/Menu/menu'
import AdoptionForm from "../../Components/AdoptionForm/adoptionForm";
import Footer from "../../Components/Footer/footer";

const AdoptionPage = () => {
    const {slug} = useParams();

    return(
        <>

            <AdoptionForm></AdoptionForm>

        </>
    )
}

export default AdoptionPage