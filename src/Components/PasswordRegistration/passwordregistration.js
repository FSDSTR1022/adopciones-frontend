import React from "react";
import './passwordregistration.css'
import PasswordRegOnce from './PasswordRegOnce/passwordRegOnce'
import PasswordRegRepeat from './PasswordRegRepeat/passwordRegRepeat'

function PasswordRegistration() {
    return (
        <div className="passwordReg1">
        <PasswordRegOnce className="passwordReg2"></PasswordRegOnce>
        <PasswordRegRepeat className="passwordReg2"></PasswordRegRepeat>
        </div>
    )
  }

export default PasswordRegistration