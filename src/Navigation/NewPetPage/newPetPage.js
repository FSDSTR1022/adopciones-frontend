import React from "react";
import { useParams } from "react-router-dom";
import RegistrationForm from "../../Components/RegistrationForm/registrationform";

const NewPetPage = () => {
    const {slug} = useParams();
    console.log('hola')
    return(<>
            <RegistrationForm category={'pets'}></RegistrationForm>
        </>
)}
export default NewPetPage