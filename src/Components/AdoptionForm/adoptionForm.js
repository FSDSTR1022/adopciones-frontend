import React, {useState} from "react";
import styles from "./adoptionForm.module.css"
import { useForm } from "react-hook-form";
import Button from "../Button/button";
import Titulos from "../Titulos/titulos";
import { useNavigate } from "react-router-dom";

const AdoptionForm = ({profileData, category}) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => handleRegistration(data);
    const navigate = useNavigate()
    
    let dateTime = () => {
        let showDate = new Date();
        let displaytodaysdate = showDate.getFullYear()+'-'
                                +('0' + (showDate.getMonth())).slice(-2) +'-'
                                +('0' + showDate.getDate()).slice(-2) 
        return displaytodaysdate
    }

    async function handleRegistration(registroDatos) {
        fetch(`http://localhost:8000/${category}`, {
            method:'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({...registroDatos, petID:profileData._id}),
        })
        .then(res => res = res.json())
        .then(newItem => {
            if (newItem.status === 'success') {
                alert(newItem.message)
                navigate (`/${category}/${newItem.userobj._id}`)
            }                    
            else alert(newItem.message)    
        })
        .catch(error => console.log(error));
    }

    return (
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formularioRegistro}>
            <div className={styles.titulo}>
            <Titulos texto='Solicitud de adopción de' span='h2'></Titulos><a className={styles.itemName}>{profileData.name}</a>
            {}
            </div>
            <div className={styles.datosform}>
                <div>
                    <div className={styles.dataEntry}>
                        <Titulos texto='Fecha de solicitud:' span='h6'></Titulos>
                        <input type='date' defaultValue={dateTime()} placeholder='Introduzca su respuesta' className={styles.inputs} {...register('date')}></input>
                    </div>
                    <div className={styles.dataEntry}>
                        <Titulos texto='¿Qué lugar de la vivienda estará destinado al animal? ¿ estaría dentro o fuera de la casa?' span='h6'></Titulos>
                        <textarea placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question1')}></textarea>
                    </div>
                    <div className={styles.dataEntry}>
                        <Titulos texto='¿Tienes animales con los que tenga que convivir el adoptado? ¿cuáles? Cuéntanos algo sobre ellos' span='h6'></Titulos>
                        <textarea placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question2')} autoComplete='off'></textarea>
                    </div>
                    <div className={styles.dataEntry}>
                    <Titulos texto='¿Qué piensas sobre la esterilización? ¿esterilizaría usted a su mascota? ¿por qué?' span='h6'></Titulos>
                        <textarea placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question3')} autoComplete='off'></textarea>
                    </div>
                    <div className={styles.dataEntry}>
                    <Titulos texto='¿Qué personas van a convivir con el animal diariamente?' span='h6'></Titulos>
                        <textarea placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question4')} autoComplete='off'></textarea>
                    </div>
                    <div className={styles.dataEntry}>
                    <Titulos texto='¿Cuánto tiempo pasará el animal solo en casa? ¿cuántas veces al día saldrá de paseo (perros)?' span='h6'></Titulos>
                        <textarea placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question5')} autoComplete='off'></textarea>
                    </div>
                </div>
                <hr className={styles.divider}></hr>
                <div >
                    
                    <Button texto='Solicitar adopción' span='button3'></Button>
                    
                </div>
            </div>
      </form>
    );
  }

export default AdoptionForm