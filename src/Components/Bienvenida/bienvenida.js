import React from "react";
import styles from "./bienvenida.module.css"
import {ButtonGroup, Button, Link} from '@chakra-ui/react'


const Bienvenida = () => {
    return <div className={styles.wellcome}>
                <div className={styles.contenedorFoto}>
                    <img src='https://dogsbestlife.com/wp-content/uploads/2021/02/cats-vs.-dogs-group-scaled.jpeg' 
                    alt='' className={styles.foto}/>
                </div>                
                <div className={styles.disclosure}>
                    <h1 >Ayúdanos a encontrar un hogar para los peludos</h1>
                    <ButtonGroup spacing='2' paddingRight={8} paddingBottom={0}>
                        <Button className={styles.botonBienvenida} variant='solid' colorScheme='yellow' color='white' bg='#f23084' href='pets' height='2rem' as={Link} to='/pets' > Empezar </Button>
                    </ButtonGroup> 
                </div>
            </div>
}

export default Bienvenida