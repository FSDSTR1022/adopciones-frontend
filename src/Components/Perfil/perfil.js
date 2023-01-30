import React from "react";
import { Image, Card, CardBody, Text, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import "./perfil.css"
import {Link} from 'react-router-dom'


const Perfil = () => {
    return <div className="myprofile"> 
                <div className="perfiltitulo">My Profile</div>
                <div className="bloque1">
                    <div className="bloque2">
                            <Card maxW='sm' className="fichaperfil" fontFamily='Jaldi' variant = 'outline' width='16rem' margin='2rem'>
                                <CardBody display="flex" alignItems="center" flexDirection='column' justifyContent="center">
                                    <Image src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==' 
                                    alt='' borderRadius='lg'/>
                                </CardBody>
                                <Card maxW='sm' fontFamily='Jaldi' variant = 'outline' width='12rem' margin='1rem'>
                                    <CardBody display="flex" alignItems="left" flexDirection='column' justifyContent="center" margin='0rem' padding='0.5rem'>
                                    <Stack mt='' spacing=''>
                                        <Heading size='md' color='#231f20' fontFamily='Jaldi'>Nombre</Heading>
                                        <Text color='#231f20'>Email</Text>
                                        <Text color='#231f20'>Teléfono</Text>
                                    </Stack>
                                    </CardBody>
                                </Card>
                            </Card>
                            <Card className="fichaperfil" fontFamily='Jaldi' variant = 'outline' width='40rem' margin='2rem'>
                                <CardBody display="flex" alignItems="center" flexDirection='column' justifyContent="center" >
                                    <Stack mt='' spacing=''>
                                        <Heading size='md' color='#231f20' fontFamily='Jaldi'>General Information</Heading>
                                        <Text color='#231f20' >Gender</Text>
                                        <Text color='#231f20' >Tipo de Documento</Text>
                                        <Text color='#231f20' >Número de Documento</Text>
                                        <Heading size='md' color='#231f20' fontFamily='Jaldi'>Descripción</Heading>
                                        <Text color='#231f20' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                                    </Stack>
                                    <Divider margin='1rem'/>
                                    <CardFooter display='flex' justifyContent='space-around'>
                                        <ButtonGroup spacing='10' >
                                            <Button variant='ghost' colorScheme='pink' color='#4f42e1' as={Link} to='/passwordreset' >Cambiar Contraseña</Button>
                                            <Button variant='solid' colorScheme='yellow' color='white' as={Link} to='/register' bg='#f23084' fontSize='xl'>Editar Perfil</Button>
                                        </ButtonGroup>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                    </div>
                </div>
            </div>
}

export default Perfil