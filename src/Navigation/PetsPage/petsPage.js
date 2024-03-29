import React , {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Parrilla from "../../Components/Parrilla/parrilla.js";
import Filter from '../../Components/Filter/filter'

const PetsPage = ({category}) => {
    const {slug} = useParams();
    const [allItems, setPet] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]) 
    useEffect(() => {
        const getPet = async () => {
            const rawData = await fetch(`http://localhost:8000/pets?status=EN_ADOPCION`)
            const pets = await rawData.json()
            setPet(pets.items)
            setFilteredItems(pets.items)
        }
        getPet()
    }, [])

    //lógica del Filtro
    const allTypes = ['Ver todo', ...new Set(allItems.map(article => article.type))]
    const [types, setTypes] = useState(allTypes)
    const filterType = (type) => {
        console.log(type)
        if (type === 'Ver todo'){
            setFilteredItems(allItems)
            return 
        }
        const filteredData = allItems.filter(article => article.type === type)
        console.log('filteredData', filteredData)
        console.log('allItems', allItems)
        setFilteredItems(filteredData)
    }
    
    return(<>
        <Filter allTypes={allTypes} filterType={filterType}></Filter>
        <Parrilla  allItems={filteredItems} category={'pets'}></Parrilla> 

        </>
    )
}

export default PetsPage