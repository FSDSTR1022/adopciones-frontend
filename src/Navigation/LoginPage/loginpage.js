import React from "react";
import { useParams } from "react-router-dom";
import Tittle from '../../Components/Tittle/tittle.js'
import Menu from '../../Components/Menu/menu'
import LoginForm from '../../Components/LoginForm/loginform'


const LoginPage = () => {
    const {slug} = useParams();

    return(
        <>
            <Tittle></Tittle>
            <Menu ></Menu>
            <LoginForm></LoginForm>
        </>
    )
}

export default LoginPage