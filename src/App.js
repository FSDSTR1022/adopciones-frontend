import './App.css';
import { ChakraProvider,Button, ButtonGroup } from '@chakra-ui/react'
import Tittle from './Components/Tittle/tittle.js'
import Menu from './Components/Menu/menu.js'

function App() {
  return (
    <ChakraProvider >
    <div className="App">
      <Tittle name = "Adopciones" />
      <Menu ></Menu>
      <Button colorScheme='blue'>Button</Button>
    </div>
    </ChakraProvider>
    
  );
}

export default App;
