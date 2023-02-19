import React , {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Parrilla from "../../Components/Parrilla/parrilla.js";
import Filter from "../../Components/Filter/filter";

const PetsPage = () => {
    const {slug} = useParams();
    const [allItems, setPet] = useState([]);

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
        {/* <Filter allItems={allItems} category={'pets'}></Filter> */}
        <Parrilla allItems={allItems} category={'pets'}></Parrilla> 
        </>
    )
}

export default PetsPage




/*
1. Declarar estado (useState)
2. Declarar useEffect (fetch al backend)
3. una vez recibida la info del BE, almacenarlo en el estado
4. Pasar ese estado al hijo
5. Usar esas props en el hijo (perfil.js)
*/