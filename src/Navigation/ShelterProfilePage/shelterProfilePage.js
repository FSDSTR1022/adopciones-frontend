import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ShelterProfile from "../../Components/ShelterProfile/shelterProfile";

const ShelterProfilePage = () => {
    const {slug} = useParams();
    const [shelterProfile, setProfile] = useState({})
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

            <ShelterProfile shelterProfile={shelterProfile}></ShelterProfile> 
        </>
    )}

export default ShelterProfilePage 