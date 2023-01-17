import './App.css';
import { ChakraProvider, 
  theme, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react'
import Tittle from './Components/Tittle/tittle.js'

function App() {
  return (
    <ChakraProvider theme={theme}>
    <div className="App">
      <Tittle name = "Adopciones"/>
      <Breadcrumb separator='-'>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='pets'>Mascotas</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='myuser'>Mi Sitio</BreadcrumbLink>
        </BreadcrumbItem>
</Breadcrumb>
    </div>
    </ChakraProvider>
  );
}

export default App;
