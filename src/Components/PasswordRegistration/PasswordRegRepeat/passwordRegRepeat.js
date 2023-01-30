import React from "react";
import { InputGroup, InputRightElement, Input, Button, Text } from '@chakra-ui/react'
import './passwordRegRepeat.css'

function PasswordRegRepeat() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (<div className="passwordgrupoRepeat">
      <InputGroup size='md' >
        <Text className="psswtextRepeat" color='#4f42e1' fontSize='md'fontWeight="bold" > Repita la contraseña: </Text>
        <Input
            className="psswInputRepeat"
            size='lg'
            variant='filled' 
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Repita la contraseña'
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

export default PasswordRegRepeat