import React from "react";
import style from "./registrationform.module.css"
import PasswordRegistration from '../PasswordRegistration/passwordregistration'
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
        const {register, handleSubmit} = useForm()
        async function handleRegistration (data) {
            console.log(data)
                return await fetch(`http://localhost:8000/users`, {
                    method:'POST',
                    mode:'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }).then(res => res = res.json())
                .catch(error => console.log(error));
    }

        return(<><form 
                onSubmit={handleSubmit(handleRegistration)}
                className={style.formularioRegistro}>  
                <h2>Regístrate</h2>
                <div className={style.datosform}>
                    <div>
                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Nombre: </h3>
                            <input className={style.inputs} placeholder='Introduzca su nombre' name='name '{...register('name')}></input>
                        </div>
                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Email: </h3>
                            <input  className={style.inputs} placeholder='Introduzca su email' {...register('email')}></input>
                        </div>

                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Teléfono: </h3>
                            <input  className={style.inputs} placeholder='Introduzca su teléfono' {...register('phone')}></input>
                        </div>
                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Género: </h3>
                            <select {...register('gender')} className={style.inputs}  >
                                <option value='hombre'>Hombre</option>
                                <option value='mujer'>Mujer</option>
                                <option value='otro'>Otro</option>
                            </select>
                        </div>
                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Tipo de documento: </h3>
                            <select {...register('idtype')} className={style.inputs}>
                                <option value='nie'>NIE</option>
                                <option value='nif'>NIF</option>
                                <option value='otro'>Otro</option>
                            </select>
                        </div>
                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Número de documento: </h3>
                            <input {...register('idNumber')} placeholder='Introduzca su número de documento' className={style.inputs}></input>
                        </div>
                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Descripción: </h3>
                            <input {...register('description')} placeholder='Descríbase' className={style.inputsDescr}></input>
                        </div>
                        <PasswordRegistration></PasswordRegistration>
                    </div>
                    <hr className={style.divider}></hr>
                    <div >
                        <div className={style.button}>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
</>)
}

export default RegistrationForm