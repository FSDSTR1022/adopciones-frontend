import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AdoptionForm from "../../Components/AdoptionForm/adoptionForm";

const AdoptionPage = () => {
    const {slug} = useParams();
    const [profileData, setProfile] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const getProfile = async () => {
            const petData = await fetch(`http://localhost:8000/pets/adoption/${id}`) 
            const profiles = await petData.json()
            setProfile(profiles.petId)
            console.log ('profile es: ', profiles.petId)
        }
        getProfile()
    }, [])
    return(
        <>

            <AdoptionForm profileData={profileData} category='adoptionReq'></AdoptionForm> 

        </>
    )
}

export default AdoptionPage