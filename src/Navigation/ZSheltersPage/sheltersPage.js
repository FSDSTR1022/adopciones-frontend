import React , {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Parrilla from "../../Components/Parrilla/parrilla.js";

 
const SheltersPage = () => {
    const {slug} = useParams();
    const [allItems, setShelter] = useState([]);

    useEffect(() => {
        const getShelters = async () => {
            const rawData = await fetch('http://localhost:8000/shelters')
            const shelters = await rawData.json()
            console.log(shelters)
            setShelter(shelters)
        }
        getShelters()
    }, [])

    return(<>
        <Parrilla allItems={allItems} category={"shelters"}></Parrilla>
        </>
    )
}

export default SheltersPage
