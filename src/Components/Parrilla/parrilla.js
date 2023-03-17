import React, {useState, useEffect} from "react";
import styles from "./parrilla.module.css"
import { useParams } from "react-router-dom";
import Button from "../Button/button";

const Parrilla = ({allItems, category}) => { 

    const {slug} = useParams();
    const [items, setItem] = useState([]);
    
    useEffect(() => {
        let url = `http://localhost:8000/${category}`;
        url = category === 'pets' ? (url+`?status=EN_ADOPCION`) : url 

        const getPet = async () => {
            const rawData = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            })
            const items = await rawData.json()
            setItem(items.items)
        }
        getPet()
    }, [])

    return  <>
                {category== 'users' ? 
                    <div className={styles.preParrilla}>
                        <h2 >Usuarios </h2> 
                    </div> 
                : null}
            
            <div className={styles.parrilla}>
            {allItems.map((item)=>(
                <div className={styles.fichaItem} key={item._id}>
                    <div className={styles.fichaContent}>
                        <img className={styles.picture} key={item.picture} src={item.picture} alt='' ></img>
                        {category== 'pets' && item.type == "Perro" ? <h3 className={styles.emoji} key={item.type} >🐶</h3> : null}
                        {category== 'pets' && item.type == "Gato" ? <h3 className={styles.emoji} key={item.type} >🐱</h3> : null}
                    </div>
                    <div className={styles.lowInfo}>
                        <h3 className={styles.nombreItem} key={item.name} >{item.name}</h3>
                        <Button texto='Saber más' ruta={`/${category}/${item._id}`} span='button1'></Button>
                    </div>
                </div>

                
        ))} 
        </div>
        </>
}

export default Parrilla





// const {slug} = useParams();
// const [items, setItem] = useState([]);

// useEffect(() => {
//     const getPet = async () => {
//         const rawData = await fetch('http://localhost:8000/pets')
//         const items = await rawData.json()
//         setItem(items)
//     }
//     getPet()
// }, [])

// return  <>
//             {category== 'users' ? 
//                 <div className={styles.preParrilla}>
//                     <h2 >Usuarios </h2> 
//                 </div> 
//             : null}
        
//         <div className={styles.parrilla}>
//         {allItems.map((item)=>(
//             <div className={styles.fichaItem} key={item._id}>
//                 <div className={styles.fichaContent}>
//                     <img className={styles.picture} key={item.picture} src={item.picture} alt='' ></img>
//                     {category== 'pets' && item.type == "Perro" ? <h3 className={styles.emoji} key={item.type} >🐶</h3> : null}
//                     {category== 'pets' && item.type == "Gato" ? <h3 className={styles.emoji} key={item.type} >🐱</h3> : null}
//                 </div>
//                 <div className={styles.lowInfo}>
//                     <h3 className={styles.nombreItem} key={item.name} >{item.name}</h3>
//                     <Button texto='Saber más' ruta={`/${category}/${item._id}`} span='button1'></Button>
//                 </div>
//             </div>

            
//     ))} 
//     </div>
//     </>
// }