import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Profile from "../../Components/Profile/profile";

const PetProfilePage = ({category}) => {
    const {slug} = useParams();
    const [profileData, setProfile] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const getProfile = async () => {
            const petData = await fetch(`http://localhost:8000/${category}/${id}`)
            const profile = await petData.json()
            setProfile(profile.petId)
            console.log ('profile es: ', profile.petId)
        }
        getProfile()
    }, [])
    console.log(profileData)
    
    return(<>
            <Profile profileData={profileData} category='pets'></Profile>
        </>
    )}

export default PetProfilePage 