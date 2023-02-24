import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RegistrationForm from "../../Components/RegistrationForm/registrationform";

const EditionPage = ({category}) => {
    const {slug} = useParams();
    const [profileData, setProfile] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const getProfile = async () => {
            const itemData = await fetch(`http://localhost:8000/pets/edit/${id}`)
            const profile = await itemData.json()
            setProfile(profile.petId)
            console.log ('profile es: ', profile.petId) 
        }
        getProfile()
    }, [])
    console.log(profileData)
    return(
        <>

            <RegistrationForm profileData={profileData} category='pets'></RegistrationForm>
            {/* {category=='users' ?  <RegistrationForm profileData={profileData} category='users'></RegistrationForm> : null} */}

        </>
    )
}

export default EditionPage