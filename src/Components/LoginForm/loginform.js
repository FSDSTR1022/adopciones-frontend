import React from "react";
import styles from "./loginform.module.css"
import { Card, CardBody, Text, Divider, Input, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import PasswordInput from '../PasswordInput/passwordInput'
import {Link} from 'react-router-dom'

const LoginForm = () => {
   
return  <>
        <div className={styles.formdelogin}>
            <Card maxW='sm' className={styles.fichalogin} fontFamily='Jaldi' variant='outline'>
            <CardBody display="flex" alignItems="center" flexDirection='column' justifyContent="center">
                <Text color='#4f42e1' fontSize='3xl'fontWeight="bold" > Login </Text>
                <Input size='lg' variant='filled' placeholder='Introduce tu email' _placeholder={{ color: '#bcb9db' }}/> 
                <PasswordInput></PasswordInput>
            </CardBody>
            <div className={styles.pssChange}>
                {/* <Text color='#4f42e1' fontSize='md' > ¿Olvidaste la contraseña? </Text>
                <h2> <a href='/passwordreset'>Cambiar contraseña</a></h2> */}
            </div>
            <CardFooter display='flex' textAlign='center' justifyContent='space-around'>
                <ButtonGroup spacing='20' >
                    <Text color='#4f42e1' fontSize='md' > ¿No eres usuario? </Text>
                    <Button variant='solid' colorScheme='yellow' color='white' className={styles.botonficha} bg='#f23084' fontSize='xl' as={Link} to='/users/newuser'>Regístrate Aquí</Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            
        </div>
        <div>    
            <img src='https://media.tenor.com/1Qah7X4zx3oAAAAi/neon-cat-rainbow.gif' alt='' className={styles.foto}/>
        </div>
    </>
}

export default LoginForm


