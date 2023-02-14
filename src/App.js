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
import SheltersPage from './Navigation/SheltersPage/sheltersPage'
import ShelterProfilePage from './Navigation/ShelterProfilePage/shelterProfilePage'
import UsersPage from './Navigation/UsersPage/usersPage.js'
import UsersProfilePage from './Navigation/UsersProfilePage/usersProfilePage'
import NewPetPage from './Navigation/NewPetPage/newPetPage'
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
          <Route path='/pets/:id' element={<PetProfilePage/>}></Route>
          <Route path='/pets/newpet' element={<NewPetPage/>}></Route>
          <Route path='/users/:id' element={<MyUserPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegistrationPage/>}></Route>
          <Route path='/passwordreset' element={<PasswordResetPage/>}></Route>
          <Route path='/success' element={<SuccessPage/>}></Route>
          <Route path='/adoption' element={<AdoptionPage/>}></Route>
          <Route path='/shelters' element={<SheltersPage/>}></Route>
          <Route path='/shelters/:id' element={<ShelterProfilePage/>}></Route>
          <Route path='/users' element={<UsersPage/>}></Route>
          <Route path='/users/:id' element={<UsersProfilePage/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </ChakraProvider>
)
}

export default App;
