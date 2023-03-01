import React, {useState} from "react";
import { Image } from '@chakra-ui/react'
import styles from "./profileEdit.module.css"
import { useForm} from 'react-hook-form'
import { useParams } from "react-router-dom";

const ProfileEdit = ({profileData, category}) => {
    console.log('profileData en profileEdit: ', profileData)
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
                fetch(`http://localhost:8000/${category}/edit/${id}`, {
                    method:'PUT',
                    mode:'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({...registroDatos, picture:data.url}),
                }).then(res => res = res.json())
                .catch(error => console.log(error));
            })}
    return  <>  <form className={styles.petProfilePage} onSubmit={handleSubmit(handleRegistration)}> 
                    <h2 >Mi perfil</h2> 
                    <div >
                        <div className={styles.petProfileBlocks}>
                            <div  className={styles.smallInfo}>
                                <Image className={styles.picture} src={profileData.picture} alt='' borderRadius='lg'/>
                                    <input type='file' className={styles.inputs} onChange={(e)=>setImage(e.target.files[0])}></input>
                                <div className={styles.smallestInfo}>
                                    <h3 >{profileData.name}</h3>
                                </div>
                            </div>
                            <div className={styles.bigInfo}>
                                <h3 >General Information</h3>
                                {category == 'users' ? <>
                                    <div className={styles.itemData}>
                                        <h4 >Email: <input defaultValue={profileData.email} {...register('email')} className={styles.editInput}/></h4>
                                        <h4 >Teléfono: <input defaultValue={profileData.phone} {...register('phone')} className={styles.editInput}/></h4>
                                        <h4 >Género: 
                                        <select defaultValue={profileData.gender} {...register('gender')} className={styles.editInput}  >
                                            <option value='Otro'>Otro</option>
                                            <option value='Hombre'>Hombre</option>
                                            <option value='Mujer'>Mujer</option>
                                        </select></h4>
                                        <h4 >Tipo de documento: 
                                        <select defaultValue={profileData.idType} {...register('idType')} className={styles.editInput}  >
                                            <option value='Otro'>Otro</option>
                                            <option value='NIE'>NIE</option>
                                            <option value='NIF'>NIF</option>
                                        </select></h4>
                                        {/* <h4 ><a>Edad</a>: {profileData.birthdate}</h4> */}
                                        <h4 >Número de documento: <input defaultValue={profileData.idNumber} {...register('idNumber')} className={styles.editInput}/></h4>
                                        <h4 >Descripción: <input defaultValue={profileData.description} {...register('description')} className={styles.editInput}/></h4>
                                    </div>
                                    </>                                
                                : null}
                                
                                {category == 'pets' ? <>
                                    <div className={styles.itemData}>
                                        <h4 >Edad: <input defaultValue={profileData.birthdate} className={styles.editInput}/></h4>

                                        <h4 >Género: 
                                        <select defaultValue={profileData.gender} {...register('gender')} className={styles.editInput}  >
                                            <option value='Otro'>Otro</option>
                                            <option value='Macho'>Macho</option>
                                            <option value='Hembra'>Hembra</option>
                                        </select></h4>
                                        
                                        <h4 >Color: <input defaultValue={profileData.color} className={styles.editInput}/></h4>
                                        <h4 >Raza: <input defaultValue={profileData.breed} className={styles.editInput} {...register('breed')}/></h4>
                                        <h4 >Fecha de llegada: <input defaultValue={profileData.arrivalDate} className={styles.editInput}/></h4>
                                        <h4 >Estado: <a>{profileData.status}</a></h4>
                                        <h4 >Descripción: <input defaultValue={profileData.description} className={styles.editInput}/></h4>
                                    </div>
                                    </>                                
                                : null}

                                <hr className={styles.divider}></hr>

                                <div className={styles.botonTotal}>
                                        <div className={styles.botonCreate}>
                                            <button onClick={upload}> <a /*href={`/${category}/${profileData._id}`}*/ >Guardar cambios</a></button> 
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </>}
            
export default ProfileEdit