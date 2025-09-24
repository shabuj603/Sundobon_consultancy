import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import About from './About';
import Home from './Home';
import LoginPage from './Login';
import SignUpPage from './Registration';
import Plcompanyreg from './Service/Plcompanyreg';
import Pulcompany from './Service/Pulcompany';
import Service from './Service';
import Error from './Error';






function Mainnav() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/signup' element={<SignUpPage/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/service/plcompany' element={<Plcompanyreg/>}></Route>
          <Route path='/sercive/publiclcompany' element={<Pulcompany/>}></Route>
          <Route path='/sercive/jointVenture' element={<Pulcompany/>}></Route>

          <Route path='*' element={<Error/>}></Route>


        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default Mainnav