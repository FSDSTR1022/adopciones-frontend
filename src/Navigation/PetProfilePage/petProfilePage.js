import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Profile from "../../Components/Profile/profile";

const PetProfilePage = () => {
    const {slug} = useParams();
    const [profileData, setProfile] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const getProfile = async () => {
            const petData = await fetch(`http://localhost:8000/pets/${id}`)
            const profiles = await petData.json()
            setProfile(profiles.petId)
            console.log ('profile es: ', profiles.petId)
        }
        getProfile()
    }, [])
    return(<>
            <Profile profileData={profileData} category='pets'></Profile>
        </>
    )}

export default PetProfilePage 