import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Navigation/HomePage/homepage';
import PetsPage from './Navigation/PetsPage/petsPage';
import LoginPage from './Navigation/LoginPage/loginpage';
import PasswordResetPage from './Navigation/PasswordResetPage/passwordresetpage'
import RegistrationPage from './Navigation/RegistrationPage/registrationpage'
import SuccessPage from './Navigation/SuccessPage/sucessPage'
import AdoptionPage from './Navigation/AdoptionPage/adoptionPage'
import ProfilePage from './Navigation/ProfilePage/profilePage'
import UsersPage from './Navigation/UsersPage/usersPage.js'
import NewPetPage from './Navigation/NewPetPage/newPetPage'
import Header from './Components/Header/header'
import Footer from "./Components/Footer/footer.js";
import EditionPage from './Navigation/EditionPage/editionPage'
import DisclaimerPage from './Navigation/DisclaimerPage/disclaimerPage'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/pets' element={<PetsPage/>}></Route> 
          <Route path='/pets/:id' element={<ProfilePage category='pets'/>}></Route>
          <Route path='/users' element={<UsersPage/>}></Route>
          <Route path='/users/:id' element={<ProfilePage category='users'/>}></Route>
          <Route path='/pets/edit/:id' element={<EditionPage category='pets'/>}></Route>
          <Route path='/users/edit/:id' element={<EditionPage category='users'/>}></Route>




          <Route path='/pets/adoption/:id' element={<AdoptionPage/>}></Route>
          <Route path='/pets/newpet' element={<NewPetPage/>}></Route>
          <Route path='/users/newuser' element={<RegistrationPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/passwordreset' element={<PasswordResetPage/>}></Route>
          <Route path='/success' element={<SuccessPage/>}></Route>
          {/* <Route path='/adoption' element={<AdoptionPage/>}></Route> */}
          {/* <Route path='/users/:id' element={<UsersProfilePage/>}></Route> */}


          <Route path='/cookies' element={<DisclaimerPage category='cookies'/>}></Route>
          <Route path='/privacypolicy' element={<DisclaimerPage category='privacy'/>}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </ChakraProvider>
)
}

export default App;
