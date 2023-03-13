import React from "react";
import styles from "./loginform.module.css"
import PasswordInput from '../PasswordInput/passwordInput'
import {Link} from 'react-router-dom'
import Titulos from "../Titulos/titulos";
import Button from "../Button/button";

const LoginForm = () => {
   
return  <>
        <div className={styles.formdelogin}>
            <Titulos texto ='Log-in' span='h2'></Titulos>
            <div className={styles.credentialBox}>
                <input className={styles.credentialInput} placeholder='Introduce tu email'></input>
                <input className={styles.credentialInput} placeholder='Introduce tu contraseña' type='password'></input>
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


{/* <Card maxW='sm' className={styles.fichalogin} fontFamily='Jaldi' variant='outline'>
            <CardBody display="flex" alignItems="center" flexDirection='column' justifyContent="center">
                <Input size='lg' variant='filled' placeholder='Introduce tu email' _placeholder={{ color: '#bcb9db' }}/> 
                <PasswordInput></PasswordInput>
            </CardBody>
            <div className={styles.pssChange}>
                {/* <Text color='#4f42e1' fontSize='md' > ¿Olvidaste la contraseña? </Text>
                <h2> <a href='/passwordreset'>Cambiar contraseña</a></h2> */}
           {/* </div>
            <CardFooter display='flex' textAlign='center' justifyContent='space-around'>
                <ButtonGroup spacing='20' >
                    <Text color='#4f42e1' fontSize='md' > ¿No eres usuario? </Text>
                    <Button variant='solid' colorScheme='yellow' color='white' className={styles.botonficha} bg='#f23084' fontSize='xl' as={Link} to='/users/newuser'>Regístrate Aquí</Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
             */}