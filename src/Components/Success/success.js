import React from "react";
import "./success.css"
import {Link} from 'react-router-dom'
import {ButtonGroup, Button} from '@chakra-ui/react'

const Success = () => {
    return  <>
        <div className="exito">
            <div className="titulo">
                <h1>😻 Se ha completado su registro 😻</h1>
            </div>
            <ButtonGroup spacing='2' paddingRight={8} paddingBottom={0}>
                <Button className="botonmenuExito" variant='solid' colorScheme='yellow' color='white' bg='#f23084' href='Login' height='2.2rem' w='7rem' as={Link} to='/myuser' > Ver mi perfil</Button>
            </ButtonGroup>
        </div>
    </>
}

export default Success