import React, {useState, useRef} from "react";
import style from "./registrationform.module.css"
import PasswordRegistration from '../PasswordRegistration/passwordregistration'
import { useForm } from "react-hook-form";
import Button from "../Button/button";

const RegistrationForm = ({category, profileData}) => {
        const [image, setImage] = useState()
        const [url, setUrl] = useState("")
        const { register, errors, handleSubmit, watch } = useForm({});
        const upload = () => {
     }

        const password = useRef({});
        password.current = watch("password", "");
        const onSubmit = async data => {
        alert(JSON.stringify(data));
        };
   

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
                setUrl(data.url)
                fetch(`http://localhost:8000/${category}`, {
                    method:'POST',
                    mode:'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({...registroDatos, picture:data.url}),
                })
                .then(res => res.json())
                .then(newItem => {
                    if (newItem.status === 'success') {
                        alert(newItem.message)
                        window.location.href = `/${category}/${newItem.userobj._id}`
                    }                    
                    else alert(newItem.message)    
                })
                .catch((error) => console.log(error));
            })}
        return(<><form 
                    onSubmit={handleSubmit(handleRegistration)}
                    className={style.formularioRegistro}>  
                    
                    {category=='users' ? <h2>Regístrate</h2> : null}
                    {category=='pets' ? <h2>Registra una mascota</h2> : null}
                    {category=='password' ? <h2>Cambie su contraseña</h2> : null}
                    
                    <div className={style.datosform}>
                        
                        {category=='pets' ?  
                            <div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Nombre: </h3>
                                    <input className={style.inputs} placeholder='Introduzca el nombre'  name='name '{...register('name')}></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Tipo: </h3>
                                    <select {...register('type')} className={style.inputs}  >
                                        <option value="none" selected disabled hidden>Seleccione una opción</option>
                                        <option value='Otro'>Otro</option>
                                        <option value='Gato'>Gato</option>
                                        <option value='Perro'>Perro</option>
                                    </select>
                                </div>

                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Género: </h3>
                                    <select {...register('gender')} className={style.inputs}  >
                                        <option value="none" selected disabled hidden>Seleccione una opción</option>
                                        <option value='Otro'>Otro</option>
                                        <option value='Macho'>Macho</option>
                                        <option value='Hembra'>Hembra</option>
                                    </select>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Fecha de nacimiento: </h3>
                                    <input type='Date' className={style.inputs} {...register('birthdate')}></input>
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



                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Contraseña: </h3>
                                    <input type='password' className={style.inputs} placeholder='Introduzca contraseña' {...register('password')}></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Repita contraseña: </h3>
                                    <input type='password' className={style.inputs} placeholder='Repita contraseña' {...register('password')}></input>
                                </div>



        {/* <h3 className={style.textos}>Contraseña: </h3>
        <input className={style.inputs} placeholder='Introduzca contraseña' name="password" type="password" ref={register({required: "You must specify a password", minLength: {value: 8, message: "Password must have at least 8 characters"}})} />
        {errors.password && <p>{errors.password.message}</p>}
  
        <h3 className={style.textos}>Repita contraseña: </h3>
        <input className={style.inputs} placeholder='Introduzca contraseña' name="password_repeat" type="password" ref={register({validate: value => value === password.current || "The passwords do not match"})}/>
        {errors.password_repeat && <p>{errors.password_repeat.message}</p>} */}



                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Género: </h3>
                                    <select {...register('gender')} className={style.inputs}  >
                                        <option value="none" selected disabled hidden>Seleccione una opción</option>
                                        <option value='Otro'>Otro</option>
                                        <option value='Hombre'>Hombre</option>
                                        <option value='Mujer'>Mujer</option>
                                    </select>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Tipo de documento: </h3>
                                    <select {...register('idType')} className={style.inputs}  >
                                        <option value="none" selected disabled hidden>Seleccione una opción</option>
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
                                    <h3 className={style.textos}>Dirección: </h3>
                                    <input className={style.inputs} placeholder='Introduzca su dirección' {...register('address')}></input>
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

                        {category=='password' ?  
                        <div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Email: </h3>
                                    <input defaultValue={profileData.email} className={style.inputs} placeholder='Introduzca su email' ></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Contraseña: </h3>
                                    <input type='password' className={style.inputs} placeholder='Introduzca contraseña' ></input>
                                </div>  
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Nueva contraseña: </h3>
                                    <input type='password' className={style.inputs} placeholder='Introduzca nueva' ></input>
                                </div>  
                                <div className={style.dataEntry}>
                                    <h3 className={style.textos}>Repita nueva contraseña: </h3>
                                    <input type='password' className={style.inputs} placeholder='Repita nueva contraseña' name='password' {...register('password')}></input>
                                </div>
                        </div>
                        : null }




                        <hr className={style.divider}></hr>
                        <div >
                            {category === 'pets' ? <Button texto='Añadir animal' onClick={upload} /*onClick={handleSubmit(onSubmit)}*/ span='button3'></Button> :
                            <Button texto='Enviar' onClick={upload} /*onClick={handleSubmit(onSubmit)}*/ span='button3'></Button>}
                        </div>
                    </div>
                </form>
    </>)
       
    }

export default RegistrationForm