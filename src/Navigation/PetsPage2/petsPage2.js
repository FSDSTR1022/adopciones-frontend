import React , {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Parrilla2 from "../../Components/0 Parrilla2/parrilla2.js";
import Filter from '../../Components/Filter/filter'

const PetsPage2 = () => {
    const {slug} = useParams();
    const [allItems, setPet] = useState([]);

    useEffect(() => {
        const getPet = async () => {
            const rawData = await fetch('http://localhost:8000/pets')
            const pets = await rawData.json()
            setPet(pets)
        }
        getPet()
    }, [])

    //definir los tipos que haya. iteramos los objetos de parrilla con un map y guarda el type
    
    const allTypes = ['Ver todo', ...new Set(allItems.map(article => article.type))]
    const [types, setTypes] = useState(allTypes) // estos dos useState creo que no me sirven para nada
    const [filteredItems, setFilteredItems] = useState(allItems) // estos dos useState creo que no me sirven para nada
    const filterType = (type) => {
        console.log(type)
        if (type === 'Ver todo'){
            setPet(allItems) //no me está devolviendo un array de objetos al pulsar Ver todo
            return 
        }
        const filteredData = allItems.filter(article => article.type === type)
        console.log('filteredData', filteredData)
        console.log('allItems', allItems)
        setPet(filteredData)
    }
    
    return(<>
        <Filter allTypes={allTypes} filterType={filterType}></Filter>
        <Parrilla2  allItems={allItems} category={'pets'}></Parrilla2> 

        </>
    )
}

export default PetsPage2