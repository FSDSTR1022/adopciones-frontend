import React from "react";
import { Image } from '@chakra-ui/react'
import styles from "./profile.module.css"
import { useParams} from 'react-router-dom'

const Profile = ({profileData, category}) => {

    const deleteItem = async() =>{
    const {id} = useParams()
        
    const itemData = await fetch(`http://localhost:8000/${category}/${id}`, {
        method:'DELETE',
        mode:'cors',
        headers:{'Content-Type': 'application/json',},
        body:JSON.stringify()
    })}

    // function getAge({profileData.birthDate}) 
    // {
    //     var today = new Date();
    //     var birthDate = new Date(dateString);
    //     var age = today.getFullYear() - birthDate.getFullYear();
    //     var m = today.getMonth() - birthDate.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    //     {
    //         age--;
    //     }
    //     return age;
    // }

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
                                    <h4 ><a>Edad</a>: {profileData.birthdate}</h4>
                                    <h4 ><a>Género</a>: {profileData.gender}</h4>
                                    <h4 ><a>Color</a>: {profileData.color}</h4>
                                    <h4 ><a>Raza</a>: {profileData.breed}</h4>
                                    <h4 ><a>Fecha de llegada</a>: {profileData.arrivalDate}</h4>
                                    <h4 ><a>Estado</a>: {profileData.status}</h4>
                                    <h4 ><a>Descripción</a>: {profileData.description}</h4>
                                    </>                                
                                : null}

                                <hr className={styles.divider}></hr>

                                <div className={styles.botonTotal}>
                                    <div className={styles.botonOpciones}>
                                        {category == 'users' ? <button > <a href={`/passwordreset`}>Cambiar Contraseña</a></button> : null}
                                        <button > <a>Editar perfil</a></button>
                                        <button onClick={deleteItem}><a>Eliminar perfil</a></button>
                                    </div>
                                    {category == 'users' ? 
                                        <div className={styles.botonCreate}>
                                            <button> <a href={`/pets/newpet`} >Añadir mascota</a></button>
                                        </div> : 
                                        <div className={styles.botonCreate}>
                                            <button> <a href={`/${category}/adoption/${profileData._id}`} >Adopta</a></button> 
                                        </div>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>}
            
export default Profile


