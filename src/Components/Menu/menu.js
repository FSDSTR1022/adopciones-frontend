import React from "react";
import styles from './menu.module.css'
import Button from '../Button/button'

const Menu = () => {
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
                    <Button texto='Log-in' ruta='/login' span='button1'></Button>
                </div>

            </div>
}

export default Menu