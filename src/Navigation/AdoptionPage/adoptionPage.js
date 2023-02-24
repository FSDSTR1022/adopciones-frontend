import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AdoptionForm from "../../Components/AdoptionForm/adoptionForm";

const AdoptionPage = () => {
    const {slug} = useParams();
    const [profileData, setProfile] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const getProfile = async () => {
            const itemData = await fetch(`http://localhost:8000/pets/adoption/${id}`)
            const profile = await itemData.json()
            setProfile(profile.petId)
            console.log ('profile es: ', profile.petId)
        }
        getProfile()
    }, [])
    console.log(profileData)
    return(
        <>

            <AdoptionForm profileData={profileData} category='adoption'></AdoptionForm> 

        </>
    )
}

export default AdoptionPage