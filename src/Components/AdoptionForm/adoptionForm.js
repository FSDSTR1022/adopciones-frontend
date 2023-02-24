import React, {useState} from "react";
import styles from "./adoptionForm.module.css"
import { useForm } from "react-hook-form";

const AdoptionForm = ({profileData, category}) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => handleRegistration(data);
    console.log(profileData)
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
        .catch(error => console.log(error));
    }
    return (
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formularioRegistro}>
            <h2>Solicitud de adopción</h2>
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
                        <h3 className={styles.textos}>Fecha de soclicitud: </h3>
                        <input type='date' placeholder='Introduzca su respuesta' className={styles.inputs} {...register('date')}></input>
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
                    <div className={styles.button}>
                    <button type="submit">Solicitar adopción</button>
                    </div>
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