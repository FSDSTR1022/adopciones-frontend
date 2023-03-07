import { Input, Button, ButtonGroup } from '@chakra-ui/react'
import {React} from 'react'
import {useForm} from 'react-hook-form'
import styles from "./form.module.css"


function Form(){
    const {register,handleSubmit,formState:{errors}}=useForm();
    const onSubmit = data => {
        fetch('http://localhost:8000', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)})
            .then((response)=>response.json())
            .then((result)=>console.log(result))
            .catch((error) =>{
                console.log(error)}
            )}


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("userName", {required:true})}type='text' name='userName' placeholder='Nombre'></input>
                {errors.userName && <span>Este campo es requerido</span>}
                <button className={styles.boton}>Registarme</button>
        </form>
    )
}

export default Form