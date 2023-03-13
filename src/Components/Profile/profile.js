import React from "react";
import styles from "./profile.module.css"
import { useParams} from 'react-router-dom'
import Button from "../Button/button";
import Titulos from "../Titulos/titulos";

const Profile = ({profileData, category}) => {

    const {id} = useParams()

    function getAge(dateString) { 
        const today = new Date(); 
        const birthDate = new Date(profileData.birthdate); 
        let itemAge = today.getFullYear() - birthDate.getFullYear(); 
        const m = today.getMonth() - birthDate.getMonth(); 
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { itemAge--; 
        } 
        return itemAge;
        }

    async function deleteItem() {
    const itemData = fetch(`http://localhost:8000/${category}/${id}`, {
        method:'DELETE',
        mode:'cors',
        headers:{'Content-Type': 'application/json',},
        body:JSON.stringify()
        })
        console.log('me han pulsado')
        .then(res => res.json())
        .then(itemRemoved => {
            if (itemRemoved.status === 'success') {
                alert(itemRemoved.message)
                window.location.href = `/${category}`
            }                    
            else alert(itemRemoved.message)
        })
        .catch((error) => console.log(error));
    }
    return  <>  <div className={styles.profilePage}> 
                    <h2 >Todo sobre <a className={styles.itemName}>{profileData.name}</a></h2> 
                    <div >
                        <div className={styles.profileBlocks}>
                            <div  className={styles.smallInfo}>
                                <img className={styles.picture} src={profileData.picture} alt='' />
                            </div>
                            <div className={styles.bigInfo}>
                                <h3 >General Information</h3>
                                {category == 'users' ? <>
                                    <div className={styles.itemData}>
                                        <h4>Email: <a>{profileData.email}</a></h4>
                                        <h4>Teléfono: <a>{profileData.phone}</a></h4>
                                        <h4>Género: <a>{profileData.gender}</a></h4>
                                        <h4>Dirección: <a>{profileData.address}</a></h4>
                                        <h4>Tipo de documento: <a>{profileData.idType}</a></h4>
                                        <h4>Número de documento: <a>{profileData.idNumber}</a></h4>
                                        <h4>Descripción: <a>{profileData.description}</a></h4>                                        
                                    </div>
                                        </>                                
                                : null}
                                
                                {category == 'pets' ? <>
                                    <div className={styles.itemData}>
                                        <h4>Edad: <a>{getAge()}</a></h4>
                                        <h4>Género: <a>{profileData.gender}</a></h4>
                                        <h4>Color: <a>{profileData.color}</a></h4>
                                        <h4>Raza: <a>{profileData.breed}</a></h4>
                                        <h4>Fecha de llegada: <a>{profileData?.arrivalDate?.split('T')[0]}</a></h4>
                                        <h4>Estado: <a>{profileData.status}</a></h4>
                                        <h4>Descripción: <a>{profileData.description}</a></h4>  
                                    </div>
                                    </>                                
                                : null}

                                <hr className={styles.divider}></hr>

                                <div className={styles.botonTotal}>
                                    <div className={styles.botonOpciones}>
                                        {category == 'users' ? <Button texto='Cambiar Contraseña' ruta={`/${category}/passwordreset/${profileData._id}`} span='button4'></Button> : null}
                                        <Button texto='Editar perfil' ruta={`/${category}/edit/${profileData._id}`} span='button4'></Button>
                                        <button id="delete" onClick={deleteItem} ><a>Eliminar perfil</a></button>

                                    </div>
                                    {category == 'users' ? 
                                        <div className={styles.botonCreate}>
                                            <button> <a href={`/pets/newpet`} >Añadir mascota</a></button>
                                        </div> : 
                                        <Button texto='Adopta' ruta={`/${category}/adoption/${profileData._id}`} span='button1'></Button>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>}
            
export default Profile