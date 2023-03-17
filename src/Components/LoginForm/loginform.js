import React, {useState, useEffect, useRef} from "react";
import styles from "./loginform.module.css"
import { useForm } from "react-hook-form";
import Titulos from "../Titulos/titulos";
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
const { register, errors, handleSubmit } = useForm({});
const navigate = useNavigate()

async function handleRegistration (registroDatos) {
        fetch(`http://localhost:8000/login`, {
            method:'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...registroDatos}),
        })
        .then(res => res.json())
        .then(data => {
            console.log('respuesta', data)
            localStorage.setItem('token', data.Token)
            localStorage.setItem('userID', data.userID)
           if (data.status === 'Success') {
            alert(data.message)
            navigate(`/pets`)
            navigate(0)
           }
           else alert(data.message + ': ' + data.details)
        })
        .catch((error) => console.log(error));
    }

return  <>
        <div className={styles.formdelogin} >
            <Titulos texto ='Log-in' span='h2'></Titulos>
            <div className={styles.loginBox}>
                <form className={styles.credentialBox} onSubmit={handleSubmit(handleRegistration)}>
                    <input {...register('email')} className={styles.credentialInput} placeholder='Introduce tu email' autoComplete="off"></input>
                    <input {...register('password')} className={styles.credentialInput} placeholder='Introduce tu contraseña' type='password' autoComplete="off"></input>
                    <Button span='button3' texto='Entrar' ></Button>
                    <hr className={styles.divider}></hr>
                </form> 
                <div className={styles.buttonBox}>
                        <Titulos texto='¿No eres usuario?' span='h5'></Titulos>
                        <Button span='button3' texto='Regístrate aquí' ruta='/users/newuser'></Button>
                </div>  
            </div>
            
        </div>
                              
                       
        
        <div>    
            <img src='https://media.tenor.com/1Qah7X4zx3oAAAAi/neon-cat-rainbow.gif' alt='' className={styles.foto}/>
        </div>
    </>
}

export default LoginForm