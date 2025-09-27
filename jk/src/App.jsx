import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Pages/Font/Header'
import Home from './Pages/Font/Home'
import ReactDOM from "react-dom/client";
import LoginPage from './Pages/Font/Login'
import SignUpPage from './Pages/Font/Registration';
import MainNuv from './Pages/Font/Mainnav';


function App() {
 

  return (
    <> 
      <MainNuv/>   
    </>
  )
}

export default App
