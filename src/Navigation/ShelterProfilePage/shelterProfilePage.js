import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Perfil from "../../Components/Profile/profile";

const ShelterProfilePage = () => {
    const {slug} = useParams();
    const [profileData, setProfile] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const getProfile = async () => {
            const shelterData = await fetch(`http://localhost:8000/shelters/${id}`)
            const profiles = await shelterData.json()
            setProfile(profiles.shelterId)
            console.log ('profile es: ', profiles.shelterId)
        }
        getProfile()
    }, [])
    return(<>

            <Perfil profileData={profileData} category={'users'}></Perfil> 
        </>
    )}

export default ShelterProfilePage 