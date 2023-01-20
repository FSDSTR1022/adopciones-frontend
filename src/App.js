import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Tittle from './Components/Tittle/tittle.js'
import Menu from './Components/Menu/menu.js'
import Parrilla from './Components/Parrilla/parrilla.js'

function App() {
  return (
    <ChakraProvider >
    <div className="App">
      <Tittle name = "Adopciones" />
      <Menu ></Menu>
      <Parrilla ></Parrilla>
    </div>
    </ChakraProvider>
    
  );
}

export default App;
