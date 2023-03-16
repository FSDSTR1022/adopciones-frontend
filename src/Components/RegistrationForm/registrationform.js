import React, {useState, useRef} from "react";
import style from "./registrationform.module.css"
import { useForm } from "react-hook-form";
import Button from "../Button/button";
import passwordValidation from './passwordValidation'
import Titulos from "../Titulos/titulos";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({category, profileData}) => {
        const [image, setImage] = useState()
        const [url, setUrl] = useState("")
        const { register, handleSubmit, watch } = useForm({});
        const navigate = useNavigate()
        const upload = () => {
     }
        const [values, setValues] = useState({
            password: '',
            confirm_password: ''
        })
        const [errors, setErrors] = useState({})
        const handleInput = (e) => {
            if(e.target.name === 'password'){
                console.log('values ', values)
                const error = passwordValidation(e.target.value, values.confirm_password)
                console.log('error', error)
                setErrors(error)
            } 
            if(e.target.name === 'confirm_password'){
                const error = passwordValidation(values.password, e.target.value)
                setErrors(error)
            }
            setValues({...values, [e.target.name] : e.target.value})
        }
        async function handleRegistration (registroDatos) {
            if(errors.password || errors.confirm_password){
                return
            }
            const formdata = new FormData()
            formdata.append('file', image)
            formdata.append('upload_preset', 'adopciones')
            formdata.append('cloud_name', 'dquuplk8z')
            setErrors(passwordValidation(values))

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
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({...registroDatos, picture:data.url}),
                })
                .then(res => res.json())
                .then(newItem => {
                    if (newItem.status === 'success') {
                        alert(newItem.message)
                        // navigate(`/${category}/${newItem.userobj._id}`)
                        {category === 'pets' ? navigate('/pets'): navigate('/login')}
                        navigate(0)
                    }                    
                    else alert(newItem.message + ':' + newItem.details)    
                })
                .catch((error) => console.log(error));
            })}
        return(<><form 
                    onSubmit={handleSubmit(handleRegistration)}
                    className={style.formularioRegistro}>  
                    
                    {category ==='users' ? <h2>Regístrate</h2> : null}
                    {category ==='pets' ? <h2>Registra una mascota</h2> : null}
                    {category ==='password' ? <h2>Cambie su contraseña</h2> : null}
                    
                    <div className={style.datosform}>
                        
                        {category === 'pets' ?  
                            <div>
                                <div className={style.dataEntry}>
                                    <Titulos texto='Nombre:' span='h6'></Titulos>
                                    <input className={style.inputs} placeholder='Introduzca el nombre'  name='name '{...register('name')} autoComplete='off'></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <Titulos texto='Tipo:' span='h6'></Titulos>
                                    <select {...register('type')} className={style.inputsSelect}  >
                                        <option value="none" selected disabled hidden>Seleccione una opción</option>
                                        <option value='Otro'>Otro</option>
                                        <option value='Gato'>Gato</option>
                                        <option value='Perro'>Perro</option>
                                    </select>
                                </div>

                                <div className={style.dataEntry}>
                                    <Titulos texto='Género:' span='h6'></Titulos>
                                    <select {...register('gender')} className={style.inputsSelect}  >
                                        <option value="none" selected disabled hidden>Seleccione una opción</option>
                                        <option value='Otro'>Otro</option>
                                        <option value='Macho'>Macho</option>
                                        <option value='Hembra'>Hembra</option>
                                    </select>
                                </div>
                                <div className={style.dataEntry}>
                                    <Titulos texto='Fecha de nacimiento:' span='h6'></Titulos>
                                    <input type='Date' className={style.inputs} {...register('birthdate')}></input>
                                </div>
                                <div className={style.dataEntry}>
                                     <Titulos texto='Color:' span='h6'></Titulos>
                                    <input  className={style.inputs} placeholder='Introduzca un color' {...register('color')}autoComplete='off'></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <Titulos texto='Raza:' span='h6'></Titulos>
                                    <input  className={style.inputs} placeholder='Introduzca una raza' {...register('breed')}autoComplete='off'></input>
                                </div>
                                <div className={style.dataEntry}>
                                   <Titulos texto='Fecha de llegada:' span='h6'></Titulos>
                                    <input type='date' className={style.inputs} {...register('arrivalDate')}></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <Titulos texto='Decripción:' span='h6'></Titulos>
                                    <input className={style.inputsBig} placeholder='Introduzca la información' {...register('description')} autoComplete='off'></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <Titulos texto='Foto:' span='h6'></Titulos>
                                    <input type='file' className={style.inputs} onChange={(e)=>setImage(e.target.files[0])}></input>
                                </div>
                            </div>
                        : null}

                        {category ==='users' ?  
                            <div>
                                <div className={style.dataEntry}>
                                     <Titulos texto='Nombre:' span='h6'></Titulos>
                                    <input className={style.inputs} placeholder='Introduzca el nombre' name='name '{...register('name')}autoComplete='off'></input>
                                </div>  
                                <div className={style.dataEntry}>
                                    <Titulos texto='Email:' span='h6'></Titulos>
                                    <input className={style.inputs} placeholder='Introduzca el email' name='email '{...register('email')}autoComplete='off'></input>
                                </div>
                                <div className={style.dataEntry}>
                                <Titulos texto='Teléfono:' span='h6'></Titulos>
                                <input  className={style.inputs} placeholder='Introduzca número de telefono' {...register('phone')}autoComplete='off'></input>
                                </div>
                                <div className={style.dataEntry}>
                                <Titulos texto='Contraseña:' span='h6'></Titulos>
                                    <input 
                                        className={style.inputs} 
                                        type='password' 
                                        placeholder='Introduzca contraseña' 
                                        autoComplete='off'
                                        name= 'password'
                                        {...register('password', {
                                            onChange: handleInput
                                        })}
                                    ></input>
                                </div>
                                {errors.password && <p className={style.errores}>{errors.password}</p>}
                                <div className={style.dataEntry}>
                                    <Titulos texto='Repita contraseña:' span='h6'></Titulos>
                                    <input 
                                        className={style.inputs} 
                                        type='password' 
                                        placeholder='Repita contraseña' 
                                        autoComplete='off'
                                        onChange={handleInput}
                                        name= 'confirm_password'
                                    ></input>
                                </div>
                                {errors.confirm_password && <p className={style.errores}>{errors.confirm_password}</p>}

                                <div className={style.dataEntry}>
                                    <Titulos texto='Género:' span='h6'></Titulos>
                                    <select {...register('gender')} className={style.inputsSelect}  >
                                        <option value="none" selected disabled hidden>Seleccione una opción</option>
                                        <option value='Otro'>Otro</option>
                                        <option value='Hombre'>Hombre</option>
                                        <option value='Mujer'>Mujer</option>
                                    </select>
                                </div>
                                <div className={style.dataEntry}>
                                    <Titulos texto='Tipo de documento:' span='h6'></Titulos>
                                    <select {...register('idType')} className={style.inputsSelect}  >
                                        <option value="none" selected disabled hidden>Seleccione una opción</option>
                                        <option value='otro'>Otro</option>
                                        <option value='NIE'>NIE</option>
                                        <option value='NIF'>NIF</option>
                                    </select>
                                </div>
                                <div className={style.dataEntry}>
                                    <Titulos texto='Número de documento:' span='h6'></Titulos>
                                    <input  className={style.inputs} placeholder='Introduzca el número de documento' {...register('idNumber')}autoComplete='off'></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <Titulos texto='Dirección:' span='h6'></Titulos>
                                    <input className={style.inputs} placeholder='Introduzca su dirección' {...register('address')}autoComplete='off'></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <Titulos texto='Descripción:' span='h6'></Titulos>
                                    <input  className={style.inputs} placeholder='Introduzca la información' {...register('description')} autoComplete='off'></input>
                                </div>
                                <div className={style.dataEntry}>
                                    <Titulos texto='Foto:' span='h6'></Titulos>
                                    <input type='file' className={style.inputs} onChange={(e)=>setImage(e.target.files[0])}></input>
                                </div>
                            </div>
                        : null}

                        {category ==='password' ?  
                        <div>
                                <div className={style.dataEntry}>
                                    <Titulos texto='Email:' span='h6'></Titulos>
                                    <input defaultValue={profileData.email} className={style.inputs} placeholder='Introduzca su email' ></input>
                                </div>
                                <div className={style.dataEntry}>
                                     <Titulos texto='Contraseña:' span='h6'></Titulos>
                                    <input type='password' className={style.inputs} placeholder='Introduzca contraseña' ></input>
                                </div>  
                                <div className={style.dataEntry}>
                                    <Titulos texto='Nueva contraseña:' span='h6'></Titulos>
                                    <input 
                                        className={style.inputs} 
                                        type='password' 
                                        placeholder='Introduzca nueva contraseña' 
                                        autoComplete='off'
                                        name= 'password'
                                        {...register('password', {
                                            onChange: handleInput
                                        })}
                                    ></input>
                                </div>
                                {errors.password && <p className={style.errores}>{errors.password}</p>}
                                <div className={style.dataEntry}>
                                    <Titulos texto='Repita nueva contraseña:' span='h6'></Titulos>
                                    <input 
                                        className={style.inputs} 
                                        type='password' 
                                        placeholder='Repita nueva contraseña' 
                                        autoComplete='off'
                                        onChange={handleInput}
                                        name= 'confirm_password'
                                    ></input>
                                </div>
                                {errors.confirm_password && <p className={style.errores}>{errors.confirm_password}</p>}
                        </div>                        
                        : null }
                        <hr className={style.divider}></hr>
                        <div >
                            {category === 'pets' ? <Button texto='Añadir animal' onClick={upload} span='button3'></Button> :
                            <Button texto='Enviar' onClick={upload} span='button3'></Button>}
                        </div>
                    </div>
                </form>
    </>)       
    }

export default RegistrationForm