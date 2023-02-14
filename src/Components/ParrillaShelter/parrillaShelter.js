import React from "react";
import styles from "./parrillaShelter.module.css"
import { ButtonGroup, Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const ParrillaShelter = ({allShelters}) => { 
    return  <>
    <div className={styles.parrilla}>
    {allShelters.map((data)=>(<>
        
            <div className={styles.fichaPet}>
                <h3 key={data.name}>{data.name}</h3>
                <h4 key={data.age}><h5>Dirección</h5>: {data.address}</h4>
                <h4 key={data.gender}><h5>Teléfono</h5>: {data.phone}</h4>
                <ButtonGroup className={styles.panelBotones} spacing='19' >
                    <Button variant='ghost' colorScheme='pink' color='#4f42e1'><a href={`/shelters/${data._id}`}>Saber más</a></Button>
                    <Button variant='solid' colorScheme='yellow' color='white' className="botonficha" bg='#f23084' w='11rem' fontSize='md' as={Link} to='/adoption'>Ver Mascotas</Button>
                </ButtonGroup>
            </div>
            </>
            ))} </div>



</>
}

export default ParrillaShelter