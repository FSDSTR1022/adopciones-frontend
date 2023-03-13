import React, {useState} from "react";
import styles from "./adoptionForm.module.css"
import { useForm } from "react-hook-form";
import Button from "../Button/button";
import Titulos from "../Titulos/titulos";

const AdoptionForm = ({profileData, category}) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => handleRegistration(data);

    let dateTime = () => {
        let showDate = new Date();
        let displaytodaysdate = showDate.getFullYear()+'-'+'0'+('0' + (showDate.getMonth())).slice(-2) +'-'+('0' + showDate.getDate()).slice(-2) 
        return displaytodaysdate
    }

    console.log('fecha', dateTime())
        

    async function handleRegistration(registroDatos) {
        fetch(`http://localhost:8000/${category}`, {
            method:'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...registroDatos}),
        })
        .then(res => res = res.json())
        .then(newItem => {
            if (newItem.status === 'success') {
                alert(newItem.message)
                window.location.href = `/${category}/${newItem.userobj._id}`
            }                    
            else alert(newItem.message)    
        })
        .catch(error => console.log(error));
    }

    return (
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formularioRegistro}>
            <Titulos texto='Solicitud de adopción' span='h2'></Titulos>
            <div className={styles.datosform}>
                <div>
                    <div className={styles.dataEntry}>
                        <h3 className={styles.textos}>Nombre de la mascota: </h3>
                        <input className={styles.inputs} defaultValue={profileData.name} name='name '></input>
                    </div>
                    <div className={styles.dataEntry}>
                        <h3 className={styles.textos}>Nombre del usuario: </h3>
                        <input className={styles.inputs} placeholder='nombre del usuario' name='name '></input>
                    </div>
                    <div className={styles.dataEntry}>
                        <h3 className={styles.textos}>Fecha de solicitud: </h3>
                        <input type='date' defaultValue={dateTime()} placeholder='Introduzca su respuesta' className={styles.inputs} {...register('date')}></input>
                    </div>
                    <div className={styles.dataEntry}>
                        <h3 className={styles.textos}>Pregunta 1: </h3>
                        <input placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question1')}></input>
                    </div>
                    <div className={styles.dataEntry}>
                        <h3 className={styles.textos}>Pregunta 2: </h3>
                        <input placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question2')}></input>
                    </div>
                    <div className={styles.dataEntry}>
                        <h3 className={styles.textos}>Pregunta 3: </h3>
                        <input placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question3')}></input>
                    </div>
                    <div className={styles.dataEntry}>
                        <h3 className={styles.textos}>Pregunta 4: </h3>
                        <input placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question4')}></input>
                    </div>
                    <div className={styles.dataEntry}>
                        <h3 className={styles.textos}>Pregunta 5: </h3>
                        <input placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question5')}></input>
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

//form
// const {register, handleSubmit} = useForm()


//form
// async function handleRegistration (registroDatos) {

//         fetch(`http://localhost:8000/${category}`, {
//             method:'POST',
//             mode:'cors',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({...registroDatos}),
//         }).then(res => res = res.json())
//         .catch(error => console.log(error));
//     }
// return(<><form
//             onSubmit={handleSubmit(onSubmit)}
//             className={styles.formularioRegistro}>

//             <h2>Solicitud de adopción</h2>


//             <div className={styles.datosform}>

//                 <div>
//                     <div className={styles.dataEntry}>
//                         <h3 className={styles.textos}>Nombre de la mascota: </h3>
//                         <input className={styles.inputs} placeholder={profileData.name} name='name '{...register('petId')}></input>
//                     </div>
//                     <div className={styles.dataEntry}>
//                         <h3 className={styles.textos}>Nombre del usuario: </h3>
//                         <input className={styles.inputs} placeholder={profileData.name} name='name '{...register('userId')}></input>
//                     </div>
//                     <div className={styles.dataEntry}>
//                         <h3 className={styles.textos}>Fecha de soclicitud: </h3>
//                         <input placeholder='Introduzca su respuesta' className={styles.inputs} {...register('date')}></input>
//                     </div>
//                     <div className={styles.dataEntry}>
//                         <h3 className={styles.textos}>Pregunta 1: </h3>
//                         <input placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question1')}></input>
//                     </div>
//                     <div className={styles.dataEntry}>
//                         <h3 className={styles.textos}>Pregunta 2: </h3>
//                         <input placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question2')}></input>
//                     </div>
//                     <div className={styles.dataEntry}>
//                         <h3 className={styles.textos}>Pregunta 3: </h3>
//                         <input placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question3')}></input>
//                     </div>
//                     <div className={styles.dataEntry}>
//                         <h3 className={styles.textos}>Pregunta 4: </h3>
//                         <input placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question4')}></input>
//                     </div>
//                     <div className={styles.dataEntry}>
//                         <h3 className={styles.textos}>Pregunta 5: </h3>
//                         <input placeholder='Introduzca su respuesta' className={styles.inputs} {...register('question5')}></input>
//                     </div>



//                 </div>

//             <hr className={styles.divider}></hr>
//             <div >
//                 <div className={styles.button}>
//                     <input type='submit'>Solicitar adopción</input>
//                 </div>
//             </div>
//         </div>
//     </form>
// </>)