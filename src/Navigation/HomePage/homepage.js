import React from "react";
import { useParams } from "react-router-dom";
import Bienvenida from "../../Components/Bienvenida/bienvenida.js";

const HomePage = () => {
    const {slug} = useParams();

    return(
        <>
            <Bienvenida></Bienvenida>
        </>
    )
}

export default HomePage