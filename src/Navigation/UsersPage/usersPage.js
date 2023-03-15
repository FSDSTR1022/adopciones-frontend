import React , {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Parrilla from "../../Components/Parrilla/parrilla.js";
import { useNavigate } from "react-router-dom";
 
const UsersPage = () => {
    const {slug} = useParams();
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
        const getUsers = async () => {
            const rawData = await fetch('http://localhost:8000/users')
            const users = await rawData.json()
            setUsers(users.users)
        }
        getUsers()
    }, [])

    return(<>
        <Parrilla allItems={allItems} category={'users'}></Parrilla>
        {isLogged && <h1>Estás logeado</h1>}
        </>
    )
}

export default UsersPage