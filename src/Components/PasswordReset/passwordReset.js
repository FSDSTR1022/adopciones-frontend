import React from "react";
import styles from "./passwordReset.module.css"
import { Card, CardBody, Text, Divider, Input, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import PasswordInput from '../PasswordInput/passwordInput'


const PasswordReset = () => {
   
return  <div className={styles.formdelogin}>
        <Card maxW='sm' className={styles.fichalogin} fontFamily='Jaldi' variant = 'outline'>
        <CardBody display="flex" alignItems="center" flexDirection='column' justifyContent="center">
            <Text color='#4f42e1' fontSize='3xl'fontWeight="bold" > Cambie su contraseña </Text>
            <br/>
            <PasswordInput></PasswordInput>
          
        </CardBody>
        <CardFooter display='flex' justifyContent='right'>
            <ButtonGroup spacing='20' >
                <Button variant='solid' colorScheme='yellow' color='white' className={styles.botonficha} bg='#f23084' fontSize='xl' as={Link} to='/myuser' >Aplicar</Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
            </div>



}

export default PasswordReset