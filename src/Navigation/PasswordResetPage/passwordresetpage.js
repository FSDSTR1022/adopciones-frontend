import React from "react";
import { useParams } from "react-router-dom";
import PasswordReset from "../../Components/PasswordReset/passwordReset";

const PetsPage = () => {
    const {slug} = useParams();

    return(
        <>

            <PasswordReset></PasswordReset>

        </>
    )
}

export default PetsPage