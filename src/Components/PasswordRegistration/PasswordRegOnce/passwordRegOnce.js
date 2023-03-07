import React from "react";
import { InputGroup, InputRightElement, Input, Button, Text } from '@chakra-ui/react'
import styles from './passwordRegOnce.module.css'

function PasswordRegOnce() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (<div className={styles.passwordgrupoOnce}>
      <InputGroup size='md'>
        <Text className={styles.psswtextOnce} color='#4f42e1' fontSize='1rem'fontWeight="bold" > Contraseña: </Text>
        <Input
            name='psswInputOnce'
            className={styles.psswInputOnce}
            size='lg'
            variant='filled' 
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Contraseña'
            _placeholder={{ color: '#bcb9db' }}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick} color='#4f42e1'>
            {show ? 'Oculta' : 'Muestra'}
          </Button>
        </InputRightElement>        
      </InputGroup>

</div> )
  }

export default PasswordRegOnce