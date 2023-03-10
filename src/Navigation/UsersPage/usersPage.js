import React , {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Parrilla from "../../Components/Parrilla/parrilla.js";

 
const UsersPage = () => {
    const {slug} = useParams();
    const [allItems, setUsers] = useState([]);

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
        </>
    )
}

export default UsersPage