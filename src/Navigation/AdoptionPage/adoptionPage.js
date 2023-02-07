import React, {useState, useEffect} from "react";
import { useParams, Link} from "react-router-dom";
import AdoptionForm from "../../Components/AdoptionForm/adoptionForm";

const AdoptionPage = () => {
    const {slug} = useParams();

    return(
        <>

            <AdoptionForm></AdoptionForm> 

        </>
    )
}

export default AdoptionPage