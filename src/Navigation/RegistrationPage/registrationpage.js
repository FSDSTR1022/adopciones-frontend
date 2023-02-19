import React from "react";
import { useParams } from "react-router-dom";
import RegistrationForm from '../../Components/RegistrationForm/registrationform'

const RegistrationPage = () => {
    const {slug} = useParams();
    return(<>
            <RegistrationForm category={'users'}></RegistrationForm>
        </>
)}
export default RegistrationPage