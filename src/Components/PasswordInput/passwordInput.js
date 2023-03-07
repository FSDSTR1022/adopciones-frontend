import React from "react";
import { InputGroup, InputRightElement, Input, Button } from '@chakra-ui/react'
import styles from './passwordInput.module.css'

function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (<div className={styles.passwordInput}>
      <InputGroup size='md' >
        <Input
            size='lg'
            variant='filled' 
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Contraseña'
            _placeholder={{ color: '#bcb9db' }}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick} color='#4f42e1'>
            {show ? 'Ocultar' : 'Mostrar'}
          </Button>
        </InputRightElement>        
      </InputGroup>
</div> )
  }

export default PasswordInput