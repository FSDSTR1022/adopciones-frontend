import React from "react";
import "./loginform.css"
import { Breadcrumb, ButtonGroup, Button } from '@chakra-ui/react'


const LoginForm = () => {
    return  <div className="loginform">
                <form>
                    <input placeholder="Introduce tu email"></input>
                </form>
                <div>
                    <h2>¿No eres usuario?</h2>
                    <Breadcrumb>
                        <ButtonGroup spacing='2' paddingRight={8} paddingBottom={0}>
                            <Button className="botonmenu" variant='solid' colorScheme='yellow' color='white' bg='#f23084' href='Login' height='2rem' as={Link} to='/login' > Regístrate aquí </Button>
                        </ButtonGroup> 
                    </Breadcrumb>
                </div>
            </div>
}

export default LoginForm