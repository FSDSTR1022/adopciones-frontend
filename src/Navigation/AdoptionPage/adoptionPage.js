import React , {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AdoptionForm from "../../Components/AdoptionForm/adoptionForm";
import { useNavigate } from "react-router-dom";


const AdoptionPage = () => {
    const {slug} = useParams();
    const [profileData, setProfile] = useState({})
    const {id} = useParams()
    const [allItems, setUsers] = useState([]);
    const [isLogged, setIsLogged] = useState(false)
    const navigate = useNavigate() 
    
    useEffect( () => {
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/login')
        } else {
            setIsLogged(true)
        }
    }, [])
    
    useEffect(() => {
        const getProfile = async () => {
            const itemData = await fetch(`http://localhost:8000/pets/${id}`)
            const profile = await itemData.json()
            setProfile(profile.itemObj)
        }
        getProfile()
    }, [])
    
    return(
        <>

            <AdoptionForm profileData={profileData} category='adoption'></AdoptionForm> 

        </>
    )
}

export default AdoptionPage