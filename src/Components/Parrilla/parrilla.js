import React, {useState, useEffect} from "react";
import styles from "./parrilla.module.css"
import { Image, } from '@chakra-ui/react'
import Filter from '../Filter/filter'
import { useParams } from "react-router-dom";



const Parrilla = ({allItems, category}) => { 

    const {slug} = useParams();
    const [items, setItem] = useState([]);

    useEffect(() => {
        const getPet = async () => {
            const rawData = await fetch('http://localhost:8000/pets')
            const items = await rawData.json()
            console.log(items)
            setItem(items)
        }
        getPet()
    }, [])

    return  <>
            <div className={styles.preParrilla}>
                {category== 'users' ? <h2 >Usuarios </h2> : null}
            </div>
            <div className={styles.parrilla}>
                
            {allItems.map((item)=>(<>
                <div className={styles.fichaPet} key={item._id}>

                    <div className={styles.picture} >
                            <Image key={item.picture} src={item.picture} alt='' borderRadius='lg'/>
                            {category== 'pets' && item.type == "Perro" ? <h3 className={styles.emoji}>🐶</h3> : null}
                            {category== 'pets' && item.type == "Gato" ? <h3 className={styles.emoji}>🐱</h3> : null}
                    </div>
                    <div className={styles.nombre}>
                        <h3 key={item.name}>{item.name}</h3>
                    </div>
                    
                    <button className={styles.boton} ><a href={`/${category}/${item._id}`}>Saber más</a></button>

                </div>
                </>
        ))} 
        </div>
        </>
}

export default Parrilla