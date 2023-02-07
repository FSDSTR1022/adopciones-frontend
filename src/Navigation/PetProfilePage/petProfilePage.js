import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PetProfile from "../../Components/PetProfile/petProfile";

const PetProfilePage = () => {
    const {slug} = useParams();
    const [petProfile, setProfile] = useState([])
    
    useEffect(() => {
        const getProfile = async () => {
            const petData = await fetch('http://localhost:8000/pets')
            const profiles = await petData.json()
            setProfile(profiles)
            console.log ('profile es: ', profiles)
        }
        getProfile()
    }, [])
    return(<>

            <PetProfile petProfile={petProfile}></PetProfile> 
        </>
    )
}

export default PetProfilePage 