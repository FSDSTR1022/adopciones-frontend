import React from "react";
import "./adoptionForm.css"
import { Card, CardBody, Text, Divider, Input, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import PasswordRegistration from '../PasswordRegistration/passwordregistration'
import {Link} from 'react-router-dom'

const AdoptionForm = () => {
   
return  <div className="formderegistro">
        <Card maxW='lg' className="fichalogin" fontFamily='Jaldi' variant = 'outline'>
        <CardBody display="flex" alignItems="center" flexDirection='column' justifyContent="center">
            <Text color='#4f42e1' fontSize='3xl'fontWeight="bold" > Solicita la Adopción de <br/>'Nombre del Gato' </Text>
            <div className="registro1">
                <Text className='textos' color='#4f42e1' fontSize='md'fontWeight="bold" > Nombre: </Text>
                <Input className='inputs' size='lg' variant='filled' placeholder='Introduce tu nombre' _placeholder={{ color: '#bcb9db' }}/> 
            </div>
            <div className="registro1">
                <Text className='textos' color='#4f42e1' fontSize='md'fontWeight="bold" > Email: </Text>
                <Input className='inputs' size='lg' variant='filled' placeholder='Introduce tu email' _placeholder={{ color: '#bcb9db' }}/> 
            </div>
            <div className="registro1">
                <Text className='textos'color='#4f42e1' fontSize='md'fontWeight="bold" > Género: </Text>
                <Input className='inputs' size='lg' variant='filled' placeholder='(Hombre, Mujer, Otro)' _placeholder={{ color: '#bcb9db' }}/> 
            </div>
            <div className="registro1">
                <Text className='textos' color='#4f42e1' fontSize='md'fontWeight="bold" > Tipo de documento: </Text>
                <Input className='inputs' size='lg' variant='filled' placeholder='(NIE, NIF, Otro)' _placeholder={{ color: '#bcb9db' }}/> 
            </div>
            <div className="registro1">
                <Text className='textos' color='#4f42e1' fontSize='md'fontWeight="bold" > Número de documento: </Text>
                <Input className='inputs' size='lg' variant='filled' placeholder='Introduzca número de documento' _placeholder={{ color: '#bcb9db' }}/> 
            </div>
            <div className="registro1">
                <Text className='textos' color='#4f42e1' fontSize='md'fontWeight="bold" > Teléfono: </Text>
                <Input className='inputs' csize='lg' variant='filled' placeholder='Introduzca número de teléfono' _placeholder={{ color: '#bcb9db' }}/> 
            </div>
            <div className="registro1">
                <Text  className='textos' color='#4f42e1' fontSize='md'fontWeight="bold" > Descripción: </Text>
                <Input h='8rem' className='inputs' size='lg' variant='filled' placeholder='Introduzca descripción' _placeholder={{ color: '#bcb9db' }}/> 
            </div>

        </CardBody>
        <Divider/>
        <CardFooter display='flex' justifyContent='right'>
            <ButtonGroup spacing='20' >
                <Button variant='solid' colorScheme='yellow' color='white' className="botonficha" bg='#f23084' fontSize='xl' as={Link} to='/success'>Enviar</Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
            </div>
}

export default AdoptionForm