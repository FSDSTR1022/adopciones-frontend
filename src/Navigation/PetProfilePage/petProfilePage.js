import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PetProfile from "../../Components/PetProfile/petProfile";

const PetProfilePage = () => {
    const {slug} = useParams();
    const [petProfile, setProfile] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const getProfile = async () => {
            const petData = await fetch(`http://localhost:8000/pets/${id}`)
            const profiles = await petData.json()
            setProfile(profiles.petId)
            console.log ('profile es: ', profiles.petId)
        }
        getProfile()
    }, [])
    return(<>

            <PetProfile petProfile={petProfile}></PetProfile> 
        </>
    )
}

export default PetProfilePage 