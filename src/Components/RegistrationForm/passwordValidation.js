function passwordValidation(password, confirm_password) {
    let error = {}; 
    if(password === '' || confirm_password === '' ){
        error.password = 'Una contraseña es necesaria'
    } else if (confirm_password !== password) {
        error.confirm_password = 'Las contraseñas no coinciden'
    }
    return error
}

export default passwordValidation