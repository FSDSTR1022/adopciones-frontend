import React , {useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Parrilla from "../../Components/Parrilla/parrilla.js";
import { Text, Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import PetFilter from '../../Components/Parrilla/petFilter'
import stles from "../../Components/Parrilla/parrilla.module.css"




/*

1. Declarar estado (useState)
2. Declarar useEffect (fetch al backend)
3. una vez recibida la info del BE, almacenarlo en el estado
4. Pasar ese estado al hijo
5. Usar esas props en el hijo (perfil.js)

*/


 
const PetsPage = () => {
    const {slug} = useParams();
    const [allPets, setPet] = useState([]);

    useEffect(() => {
        const getPet = async () => {
            const rawData = await fetch('http://localhost:8000/pets')
            const pets = await rawData.json()
            console.log(pets)
            setPet(pets)
        }
        getPet()
    }, [])

    return(<>
        <Parrilla allPets={allPets}></Parrilla>            
        </>
    )
}

export default PetsPage


// import React from "react";

// function FormSignIn ({children}) {
//     function PasswordRecovering() {
//         console.log('aaa');
//       }

//     return <form onSubmit={PasswordRecovering}>{children}</form>;
// }

// export default FormSignIn;