import React , {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ParrillaUsers from "../../Components/ParrillaUsers/parrillaUsers.js";

 
const UsersPage = () => {
    const {slug} = useParams();
    const [allUsers, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const rawData = await fetch('http://localhost:8000/users')
            const users = await rawData.json()
            console.log(users)
            setUsers(users)
        }
        getUsers()
    }, [])

    return(<>
        <ParrillaUsers allUsers={allUsers}></ParrillaUsers>
        </>
    )
}

export default UsersPage