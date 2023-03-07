import React from "react";
import styles from './passwordregistration.module.css'
import PasswordRegOnce from './PasswordRegOnce/passwordRegOnce'
import PasswordRegRepeat from './PasswordRegRepeat/passwordRegRepeat'

function PasswordRegistration() {
    return (
        <div className={styles.passwordReg1}>
        <PasswordRegOnce className={styles.passwordReg2}></PasswordRegOnce>
        <PasswordRegRepeat className={styles.passwordReg2}></PasswordRegRepeat>
        </div>
    )
  }

export default PasswordRegistration