import React from "react";
import styles from "./profile.module.css"
import { useParams} from 'react-router-dom'

const Profile = ({profileData, category}) => {

    const {id} = useParams()

    async function deleteItem() {
    const itemData = await fetch(`http://localhost:8000/${category}/${id}`, {
        method:'DELETE',
        mode:'cors',
        headers:{'Content-Type': 'application/json',},
        body:JSON.stringify()
    })
    .then(itemRemoved => {console.log('message', itemRemoved.status)
    if (itemRemoved.status != 'success') alert(itemRemoved.message)
    })
    .then(itemRemoved => {console.log('message', itemRemoved.message)
        if (itemRemoved.status == 'success') alert(itemRemoved.message)
        })

    .catch((error) => console.log(error));
}
console.log('profiledata es: ',profileData)
    return  <>  <div className={styles.profilePage}> 
                    <h2 >Todo sobre <a className={styles.itemName}>{profileData.name}</a></h2> 
                    <div >
                        <div className={styles.profileBlocks}>
                            <div  className={styles.smallInfo}>
                                <img className={styles.picture} src={profileData.picture} alt='' />
                                {/* <div className={styles.smallestInfo}>
                                    <h3 >{profileData.name}</h3>
                                </div>  */}
                            </div>
                            <div className={styles.bigInfo}>
                                <h3 >General Information</h3>
                                {category == 'users' ? <>
                                    <div className={styles.itemData}>
                                        <h4>Email: <a>{profileData.email}</a></h4>
                                        <h4>Teléfono: <a>{profileData.phone}</a></h4>
                                        <h4>Edad: <a>{profileData.birthdate}</a></h4>
                                        <h4>Género: <a>{profileData.gender}</a></h4>
                                        <h4>Tipo de documento: <a>{profileData.idType}</a></h4>
                                        <h4>Número de documento: <a>{profileData.idNumber}</a></h4>
                                        <h4>Descripción: <a>{profileData.description}</a></h4>                                        
                                    </div>
                                        </>                                
                                : null}
                                
                                {category == 'pets' ? <>
                                    <div className={styles.itemData}>
                                        <h4>Edad: <a>{profileData.birthdate}</a></h4>
                                        <h4>Género: <a>{profileData.gender}</a></h4>
                                        <h4>Color: <a>{profileData.color}</a></h4>
                                        <h4>Raza: <a>{profileData.breed}</a></h4>
                                        <h4>Fecha de llegada: <a>{profileData.arrivalDate}</a></h4>
                                        <h4>Estado: <a>{profileData.status}</a></h4>
                                        <h4>Descripción: <a>{profileData.description}</a></h4>  
                                    </div>
                                    </>                                
                                : null}

                                <hr className={styles.divider}></hr>

                                <div className={styles.botonTotal}>
                                    <div className={styles.botonOpciones}>
                                        {category == 'users' ? <button > <a href={`/passwordreset`}>Cambiar Contraseña</a></button> : null}
                                        <button > <a href={`/${category}/edit/${profileData._id}`} >Editar perfil</a></button>
                                        <button id="delete" onClick={deleteItem} ><a>Eliminar perfil</a></button>
                                    </div>
                                    {category == 'users' ? 
                                        <div className={styles.botonCreate}>
                                            <button> <a href={`/pets/newpet`} >Añadir mascota</a></button>
                                        </div> : 
                                        <div className={styles.botonCreate}>
                                            <button > <a href={`/${category}/adoption/${profileData._id}`} >Adopta</a></button> 
                                        </div>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>}
            
export default Profile