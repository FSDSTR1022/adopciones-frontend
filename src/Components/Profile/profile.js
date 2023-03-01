import React from "react";
import { Image } from '@chakra-ui/react'
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
    console.log('itemData: ', itemData)
}
    return  <>  <div className={styles.petProfilePage}> 
                    <h2 >Mi perfil</h2> 
                    <div >
                        <div className={styles.petProfileBlocks}>
                            <div  className={styles.smallInfo}>
                                <Image className={styles.picture} src={profileData.picture} alt='' borderRadius='lg'/>
                                <div className={styles.smallestInfo}>
                                    <h3 >{profileData.name}</h3>
                                </div>
                            </div>
                            <div className={styles.bigInfo}>
                                <h3 >General Information</h3>
                                {category == 'users' ? <>
                                    <h4 ><a>Email</a>: {profileData.email}</h4>
                                    <h4 ><a>Teléfono</a>: {profileData.phone}</h4>
                                    <h4 ><a>Edad</a>: {profileData.birthdate}</h4>
                                    <h4 ><a>Género</a>: {profileData.gender}</h4>
                                    <h4 ><a>Tipo de documento</a>: {profileData.idType}</h4>
                                    <h4 ><a>Número de documento</a>: {profileData.idNumber}</h4>
                                    <h4 ><a>Descripción</a>: {profileData.description}</h4>
                                    </>                                
                                : null}
                                
                                {category == 'pets' ? <>
                                    <div className={styles.itemData}>
                                        <h4 >Edad: {profileData == null ? <input defaultValue={profileData.birthdate} className={styles.editInput}/> : <a>{profileData.birthdate}</a>}</h4>
                                        <h4 >Género:  <input defaultValue={profileData.gender} className={styles.editInput}/></h4>
                                        <h4 >Color:  <input defaultValue={profileData.color} className={styles.editInput}/></h4>
                                        <h4 > Raza: <input defaultValue={profileData.breed} className={styles.editInput}/></h4>
                                        <h4 >Fecha de llegada: <input defaultValue={profileData.arrivalDate} className={styles.editInput}/></h4>
                                        <h4 >Estado: <a>{profileData.status}</a></h4>
                                        <h4 >Descripción: <input defaultValue={profileData.description} className={styles.editInput}/></h4>
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