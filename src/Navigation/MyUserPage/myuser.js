import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Profile from '../../Components/Profile/profile'

/*
1. Declarar estado (useState)
2. Declarar useEffect (fetch al backend)
3. una vez recibida la info del BE, almacenarlo en el estado
4. Pasar ese estado al hijo
5. Usar esas props en el hijo (perfil.js)
*/

const MyUserPage = () => {
    const {slug} = useParams();
    const [profileData, setProfile] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const getProfile = async () => {
            const usersData = await fetch(`http://localhost:8000/users/${id}`)
            const profiles = await usersData.json()
            setProfile(profiles.userobj) 
            console.log ('profile es: ', profiles.userobj)
        }
        getProfile()
    }, [])
    return(<>
            <Profile profileData={profileData} category={'users'}></Profile>
        </>
    )
}

export default MyUserPage