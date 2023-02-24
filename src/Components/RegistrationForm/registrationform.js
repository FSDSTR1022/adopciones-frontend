import React, {useState} from "react";
import style from "./registrationform.module.css"
import PasswordRegistration from '../PasswordRegistration/passwordregistration'
import { useForm } from "react-hook-form";

const RegistrationForm = ({profileData, category}) => {
    console.log('profileData es', profileData)
        //files 
        const [image, setImage] = useState()
        const [url, setUrl] = useState("")
        
        //form
        const {register, handleSubmit} = useForm()
        
        //files
        const upload = () => {
     }
    
        //form
        async function handleRegistration (registroDatos) {
            const formdata = new FormData()
            formdata.append('file', image)
            formdata.append('upload_preset', 'adopciones')
            formdata.append('cloud_name', 'dquuplk8z')
        
            fetch('https://api.cloudinary.com/v1_1/dquuplk8z/image/upload',{ 
                method: 'post',
                body: formdata
            })
            .then(resp => resp.json())
            .then(data =>{
                console.log('url', data)
                setUrl(data.url)
                fetch(`http://localhost:8000/${category}`, {
                    method:'POST',
                    mode:'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({...registroDatos, picture:data.url}),
                }).then(res => res = res.json())
                .catch(error => console.log(error));
            })}
        return(<><form 
                    onSubmit={handleSubmit(handleRegistration)}
                    className={style.formularioRegistro}>  
                    
                    {category=='users' ? <h2>Regístrate</h2> : null}
                    {category=='pets' ? <h2>Registra una mascota</h2> : null}

                    
                    <div className={style.datosform}>
                        
                        {category=='pets' ?  
                            <div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Nombre: </h3>
                                    <input className={style.inputs} defaultValue={profileData.name} /*no me sirve para el form de editar y de nuevo item*/ placeholder='Introduzca el nombre'  name='name '{...register('name')}></input>
                                </div>                                
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Tipo: </h3>
                                    <select {...register('type')} className={style.inputs}  >
                                        <option value='Otro'>Otro</option>
                                        <option value='Gato'>Gato</option>
                                        <option value='Perro'>Perro</option>
                                    </select>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Fecha de nacimiento: </h3>
                                    <input type='Date' className={style.inputs} {...register('birthdate')}></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Género: </h3>
                                    <select {...register('gender')} className={style.inputs}  >
                                        <option value='Otro'>Otro</option>
                                        <option value='Macho'>Macho</option>
                                        <option value='Hembra'>Hembra</option>
                                    </select>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Color: </h3>
                                    <input  className={style.inputs} placeholder='Introduzca un color' {...register('color')}></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Raza: </h3>
                                    <input  className={style.inputs} placeholder='Introduzca una raza' {...register('breed')}></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Fecha de llegada: </h3>
                                    <input type='date' className={style.inputs} {...register('arrivalDate')}></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Estado: </h3>
                                    <select {...register('status')} className={style.inputs}  >
                                        <option value='Otro'>Otro</option>
                                        <option value='En adopcion'>En busca de hogar</option>
                                    </select>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Descripción: </h3>
                                    <input className={style.inputsBig} placeholder='Introduzca la información' {...register('description')}></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Foto: </h3>
                                    <input type='file' className={style.inputs} onChange={(e)=>setImage(e.target.files[0])}></input>
                                </div>
                            </div>
                        : null}

                        {category=='users' ?  
                            <div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Nombre: </h3>
                                    <input className={style.inputs} placeholder='Introduzca el nombre' name='name '{...register('name')}></input>
                                </div>  
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Email: </h3>
                                    <input className={style.inputs} placeholder='Introduzca el email' name='email '{...register('email')}></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Teléfono: </h3>
                                    <input  className={style.inputs} placeholder='Introduzca número de telefono' {...register('phone')}></input>
                                </div>
                                <PasswordRegistration/>                       
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Fecha de nacimiento: </h3>
                                    <input type='Date' className={style.inputs} {...register('birthdate')}></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Género: </h3>
                                    <select {...register('gender')} className={style.inputs}  >
                                        <option value='Otro'>Otro</option>
                                        <option value='Hombre'>Hombre</option>
                                        <option value='Mujer'>Mujer</option>
                                    </select>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Tipo de documento: </h3>
                                    <select {...register('idType')} className={style.inputs}  >
                                        <option value='otro'>Otro</option>
                                        <option value='NIE'>NIE</option>
                                        <option value='NIF'>NIF</option>
                                    </select>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Número de Documento: </h3>
                                    <input  className={style.inputs} placeholder='Introduzca el número de documento' {...register('idNumber')}></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Descripción: </h3>
                                    <input  className={style.inputs} placeholder='Introduzca la información' {...register('description')}></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Foto: </h3>
                                    <input type='file' className={style.inputs} onChange={(e)=>setImage(e.target.files[0])}></input>
                                </div>
                            </div>
                        : null}

                        <hr className={style.divider}></hr>
                        <div >
                            <div className={style.button}>
                                <button onClick={upload}>Subir</button>
                            </div>
                        </div>
                    </div>
                </form>
    </>)
       
    }

export default RegistrationForm