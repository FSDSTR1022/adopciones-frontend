import React from "react";
import { useParams } from "react-router-dom";
import PetProfile from "../../Components/PetProfile/petProfile";

const PetProfilePage = () => {
    const {slug} = useParams();

    return(
        <>

            <PetProfile></PetProfile>

        </>
    )
}

export default PetProfilePage