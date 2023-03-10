import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import LoginForm from '../../Components/LoginForm/loginform'

const LoginPage = ({category}) => {
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

    console.log('user', allItems)

    return(
            <>
                <LoginForm allItems={allItems} ></LoginForm>
            </>
    )}

export default LoginPage 