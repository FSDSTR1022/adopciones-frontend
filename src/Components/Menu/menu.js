import React , {useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './menu.module.css'
import Button from '../Button/button'

const Menu = () => {
    const [isLogged, setIsLogged] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams

    useEffect( () => {
        const token = localStorage.getItem('token')
        if(!token){
            // navigate('/')
        } else {
            setIsLogged(true)
        }
        console.log(localStorage.token)
    }, [])
    
    return <div className={styles.menuGeneral}> 
                <div className={styles.menu}>
                    <nav >
                        <ul className={styles.menulista}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/pets">Mascotas</a></li>
                            <li><a href="/users">Usuarios</a></li>
                        </ul>
                    </nav>
                </div>
                <div >
                    {!isLogged && <Button texto='Log-in' ruta='/login' span='button1'></Button>}
                    {isLogged && <Button texto='Mi perfil' ruta='/users' span='button1'></Button>}
                </div>

            </div>
}

export default Menu