import React , {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Parrilla2 from "../../Components/0 Parrilla2/parrilla2.js";
import ButtonList from '../../Components/0 ButtonList/buttonList'

const PetsPage2 = () => {
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

    //definir los tipos que haya. iteramos los objetos de parrilla con un map y guarda el type
    const allTypes = ['Ver todo', ...new Set(allItems.map(article => article.type))]
    console.log(allTypes)
    const [types, setTypes] = useState(allTypes)
    const [filteredItems, setFilteredItems] = useState(allItems)

    const filterType = (type) => {
        console.log(type)
        if (type === 'Ver todo'){
            setTypes(allItems)
            return
        }
        const filteredData = allItems.filter(article => article.type === type)
        setPet(filteredData)
    }
    
    return(<>
        <ButtonList allTypes={allTypes} filterType={filterType}></ButtonList>
        <Parrilla2  filteredItems={filteredItems} allItems={allItems} category={'pets'}></Parrilla2> 

        </>
    )
}

export default PetsPage2