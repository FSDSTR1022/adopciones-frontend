import React , {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ParrillaShelter from "../../Components/ParrillaShelter/parrillaShelter.js";

 
const SheltersPage = () => {
    const {slug} = useParams();
    const [allShelters, setShelter] = useState([]);

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
        <ParrillaShelter allShelters={allShelters}></ParrillaShelter>
        </>
    )
}

export default SheltersPage
