import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RegistrationForm from '../../Components/RegistrationForm/registrationform'

const RegistrationPage = ({category, category2}) => {
    const {slug} = useParams();
    const [profileData, setProfile] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const getProfile = async () => {
            const itemData = await fetch(`http://localhost:8000/${category}/${id}`)
            const profile = await itemData.json()
            setProfile(profile.itemObj)
        }
        getProfile()
    }, [])
    
    return(<>
            {category2 === 'password' ? <RegistrationForm category={'password'} profileData={profileData}></RegistrationForm> : null }
            {category === 'users' ? <RegistrationForm category={'users'}></RegistrationForm> : null }
            {category === 'pets' ? <RegistrationForm category={'pets'}></RegistrationForm> : null }
        </>
)}
export default RegistrationPage