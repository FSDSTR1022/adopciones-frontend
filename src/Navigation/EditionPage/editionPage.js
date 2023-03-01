import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileEdit from "../../Components/ProfileEdit/profileEdit";

const EditionPage = ({category}) => {
    const {slug} = useParams();
    const [profileData, setProfile] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const getProfile = async () => {
            const itemData = await fetch(`http://localhost:8000/${category}/edit/${id}`)
            const profile = await itemData.json()
            setProfile(profile.user.userUpdated)
            console.log ('profile es: ', profile.user.userUpdated) 
        }
        getProfile()
    }, [])
    console.log('profileData en EditionPage: ', profileData)
    return(
        <>
            {category=='pets' ?  <ProfileEdit profileData={profileData} category='pets'></ProfileEdit> : null}
            {category=='users' ?  <ProfileEdit profileData={profileData} category='users'></ProfileEdit> : null}
        </>
    )
}

export default EditionPage