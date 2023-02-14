import React from "react";
import style from "./newPetForm.module.css"
import { useForm } from "react-hook-form";

const newPetForm = () => {
        const {register, handleSubmit} = useForm()
        async function handleRegistration (data) {
            console.log(data)
                return await fetch(`http://localhost:8000/pets`, {
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
                <h2>Registra una mascota</h2>
                <div className={style.datosform}>
                    <div>
                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Nombre: </h3>
                            <input className={style.inputs} placeholder='Introduzca el nombre' name='name '{...register('name')}></input>
                        </div>
                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Tipo: </h3>
                            <select {...register('type')} className={style.inputs}  >
                                <option value='otro'>Otro</option>
                                <option value='gato'>Gato</option>
                                <option value='perro'>Perro</option>
                            </select>
                        </div>
                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Edad: </h3>
                            <input  className={style.inputs} placeholder='Introduzca edad' {...register('age')}></input>
                        </div>
                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Género: </h3>
                            <select {...register('gender')} className={style.inputs}  >
                                <option value='otro'>Otro</option>
                                <option value='macho'>Macho</option>
                                <option value='hembra'>Hembra</option>
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
                            <h3 className={style.textos}>Descripción corta: </h3>
                            <input  className={style.inputs} placeholder='Máximo 255 caracteres' {...register('shortDescription')}></input>
                        </div>
                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Descripción: </h3>
                            <input  className={style.inputs} placeholder='Introduzca la información' {...register('description')}></input>
                        </div>
                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Fecha de llegada: </h3>
                            <input type='date' className={style.inputs} {...register('arrivalDate')}></input>
                        </div>
                        <div className={style.dataEntry}>
                            <h3 className={style.textos}>Foto: </h3>
                            <input type='file' className={style.inputs} {...register('picture')}></input>
                        </div>




                       
                    </div>
                    <hr className={style.divider}></hr>
                    <div >
                        <div className={style.button}>
                            <button>Subir</button>
                        </div>
                    </div>
                </div>
            </form>
</>)
}

export default newPetForm