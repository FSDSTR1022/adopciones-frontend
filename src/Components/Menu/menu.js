import React from "react";
import styles from './menu.module.css'

const Menu = () => {
    return <div className={styles.menuGeneral}> 
                <div className={styles.menu}>
                    <nav >
                        <ul className={styles.menulista}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/pets">Mascotas</a></li>
                            <li><a href="users">Usuarios</a></li>
                            <li><a href="shelters">Protectoras</a></li>
                        </ul>
                    </nav>
                </div>
                <div >
                    <button className={styles.boton}><a href="login">Log-in</a></button>
                </div>

            </div>
}

export default Menu