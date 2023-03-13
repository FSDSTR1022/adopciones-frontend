import React, {useState} from "react";
import Button from "../Button/button";
import styles from "./profileEdit.module.css"
import { useForm} from 'react-hook-form'
import { useParams } from "react-router-dom";

const ProfileEdit = ({profileData, category}) => {
        const [image, setImage] = useState()
        const [url, setUrl] = useState("")
        const {register, handleSubmit} = useForm()
        const {id} = useParams()
        const upload = () => {
     }
        async function handleRegistration (registroDatos) {
            const formdata = new FormData()
            formdata.append('file', image) 
            formdata.append('upload_preset', 'adopciones')
            formdata.append('cloud_name', 'dquuplk8z')
            console.log('registro de datos: ', registroDatos)
            fetch('https://api.cloudinary.com/v1_1/dquuplk8z/image/upload',{ 
                method: 'put',
                body: formdata
            })
            .then(resp => resp.json())
            .then(data =>{
                console.log('url', data)
                setUrl(data.url)
                fetch(`http://localhost:8000/${category}/${id}`, {
                    method:'PUT',
                    mode:'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({...registroDatos, picture:data.url}),
                })
                .then(res => res = res.json())
                .then(itemUpdated => {
                if (itemUpdated.status === 'success') {
                    alert(itemUpdated.message)
                    window.location.href = `/${category}/${id}`
                }                    
                else alert(itemUpdated.message)

            }) 
                .catch(error => console.log(error));
            })}
    return  <>  <form className={styles.profilePage} onSubmit={handleSubmit(handleRegistration)}> 
                    <h2 >Todo sobre <input className={styles.itemName} defaultValue={profileData.name} {...register('name')} /></h2> 
                    <div >
                        <div className={styles.profileBlocks}>
                            <div  className={styles.smallInfo}>
                                <img className={styles.picture} src={profileData.picture} alt=''/>
                                    <input type='file' className={styles.inputs} onChange={(e)=>setImage(e.target.files[0])}></input>
                            </div>
                            <div className={styles.bigInfo}>
                                <h3 >General Information</h3>
                                {category == 'users' ? <>
                                    <div className={styles.itemData}>
                                        <h4 >Email: <input defaultValue={profileData.email} {...register('email')} className={styles.editInput}/></h4>
                                        <h4 >Teléfono: <input defaultValue={profileData.phone} {...register('phone')} className={styles.editInput}/></h4>
                                        <h4 >Género: {profileData.gender}
                                        <select defaultValue={profileData.gender} {...register('gender')} className={styles.editInput}  >
                                            <option value='Otro'>Otro</option>
                                            <option value='Hombre'>Hombre</option>
                                            <option value='Mujer'>Mujer</option>
                                        </select></h4>
                                        <h4 >Tipo de documento: 
                                        <select value={profileData.idType} {...register('idType')} className={styles.editInput}  >
                                            <option value='Otro'>Otro</option>
                                            <option value='NIE'>NIE</option>
                                            <option value='NIF'>NIF</option>
                                        </select></h4>
                                        <h4 >Número de documento: <input defaultValue={profileData.idNumber} {...register('idNumber')} className={styles.editInput}/></h4>
                                        <h4 >Descripción: <input defaultValue={profileData.description} {...register('description')} className={styles.editInputDescription}/></h4>
                                    </div>
                                    </>                                
                                : null}
                                
                                {category == 'pets' ? <>
                                    <div className={styles.itemData}>
                                        <h4 >Fecha nacimiento: <input type='date' defaultValue={profileData?.birthdate?.split('T')[0]} className={styles.editInput}/></h4>
                                        <h4 >Género: 
                                        <select value={profileData.gender} {...register('gender')} className={styles.editInput}  >
                                            <option value='Otro'>Otro</option>
                                            <option value='Macho'>Macho</option>
                                            <option value='Hembra'>Hembra</option>
                                        </select></h4>
                                        
                                        <h4 >Color: <input defaultValue={profileData.color} className={styles.editInput}{...register('color')}/></h4>
                                        <h4 >Raza: <input defaultValue={profileData.breed} className={styles.editInput} {...register('breed')}/></h4>
                                        <h4 >Fecha de llegada: <input type='date' defaultValue={profileData?.arrivalDate?.split('T')[0]} {...register('arrivalDate')} className={styles.editInput}/></h4>
                                        <h4>Estado: <a>{profileData.status}</a></h4>
                                        <h4 >Descripción: <textarea defaultValue={profileData.description} className={styles.editInputDescription}{...register('description')}/></h4>
                                    </div>
                                    </>                                
                                : null}

                                <hr className={styles.divider}></hr>

                                <div className={styles.botonTotal}>
                                            
                                            <Button onClick={upload} texto='Guardar cambios' span='button3'></Button>
                                            <Button texto='Atrás' ruta={`/${category}/${profileData._id}`} span='button4'></Button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </>}
            
export default ProfileEdit