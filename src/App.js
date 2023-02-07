import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Navigation/HomePage/homepage';
import PetsPage from './Navigation/PetsPage/petspage';
import MyUserPage from './Navigation/MyUserPage/myuser';
import LoginPage from './Navigation/LoginPage/loginpage';
import PasswordResetPage from './Navigation/PasswordResetPage/passwordresetpage'
import RegistrationPage from './Navigation/RegistrationPage/registrationpage'
import SuccessPage from './Navigation/SuccessPage/sucessPage'
import AdoptionPage from './Navigation/AdoptionPage/adoptionPage'
import PetProfilePage from './Navigation/PetProfilePage/petProfilePage'
import Header from './Components/Header/header'
import Footer from "./Components/Footer/footer.js";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/pets' element={<PetsPage/>}></Route>
          <Route path='/myuser' element={<MyUserPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegistrationPage/>}></Route>
          <Route path='/passwordreset' element={<PasswordResetPage/>}></Route>
          <Route path='/success' element={<SuccessPage/>}></Route>
          <Route path='/adoption' element={<AdoptionPage/>}></Route>
          <Route path='/pets/:id' element={<PetProfilePage/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </ChakraProvider>
);}

export default App;
