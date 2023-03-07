import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Profile from "../../Components/Profile/profile";

const ProfilePage = ({category}) => {
    const {slug} = useParams(); 
    const [profileData, setProfile] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const getProfile = async () => {
            const itemData = await fetch(`http://localhost:8000/${category}/${id}`)
            const profile = await itemData.json()
            setProfile(profile.itemObj)
            console.log ('profile es: ', profile.itemObj)
        }
        getProfile()
    }, [])
    
    return(
            <>
                {category=='pets' ?  <Profile profileData={profileData}  category='pets'></Profile> : null}
                {category=='users' ?  <Profile profileData={profileData}  category='users'></Profile> : null}
            </>
    )}

export default ProfilePage 