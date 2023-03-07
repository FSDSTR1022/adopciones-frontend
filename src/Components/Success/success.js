import React from "react";
import styles from "./success.module.css"
import {Link} from 'react-router-dom'
import {ButtonGroup, Button} from '@chakra-ui/react'

const Success = () => {
    return  <>
        <div className={styles.exito}>
            <div className={styles.titulo}>
                <h1>😻 Se ha completado su registro 😻</h1>
            </div>
            <ButtonGroup spacing='2' paddingRight={8} paddingBottom={0}>
                <Button className={styles.botonmenuExito} variant='solid' colorScheme='yellow' color='white' bg='#f23084' href='Login' height='2.2rem' w='7rem' as={Link} to='/myuser' > Ver mi perfil</Button>
            </ButtonGroup>
        </div>
    </>
}

export default Success