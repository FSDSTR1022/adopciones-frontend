import React , {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Success from '../../Components/Success/success'

const SuccessPage = ({category}) => {
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

    return(
        <>

            <Success profileData={profileData} category='users'></Success>

        </>
    )
}

export default SuccessPage