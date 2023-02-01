import React , {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Parrilla from "../../Components/Parrilla/parrilla.js";

/*

1. Declarar estado (useState)
2. Declarar useEffect (fetch al backend)
3. una vez recibida la info del BE, almacenarlo en el estado
4. Pasar ese estado al hijo
5. Usar esas props en el hijo (perfil.js)

*/



const PetsPage = () => {
    const {slug} = useParams();
    const [pet, setPet] = useState([]);

    useEffect(()=>{
        const getPet = async ()=>{
            const rawData = await fetch('http://localhost:8000/pets')
            const pet = await rawData.json()
            console.log(pet)
            setPet(pet)
        }
        getPet()
    }, [])

    return(
        <>
            <Parrilla petList={pet}></Parrilla>
        </>
    )
}

export default PetsPage