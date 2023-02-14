import React from "react";
import { useParams } from "react-router-dom";
import NewPetForm from '../../Components/NewPetForm/newPetForm'

const NewPetPage = () => {
    const {slug} = useParams();
    return(<>
            <NewPetForm></NewPetForm>
        </>
)}
export default NewPetPage