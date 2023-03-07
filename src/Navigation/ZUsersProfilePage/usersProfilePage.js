import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import UserProfile from "../../Components/Userprofile/userProfile";

const UserProfilePage = () => {
    const {slug} = useParams();
    const [userProfile, setProfile] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const getProfile = async () => {
            const userData = await fetch(`http://localhost:8000/users/${id}`)
            const profiles = await userData.json()
            setProfile(profiles.userId)
            console.log ('profile es: ', profiles.userId)
        }
        getProfile()
    }, [])
    return(<>

            <UserProfile userProfile={userProfile}></UserProfile> 
        </>
    )}

export default UserProfilePage 