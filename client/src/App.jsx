import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './pages/home/Home'
import Properties from './pages/properties/Properties'
import Contact from './pages/contactus/Contact'
import Aboutus from './pages/aboutus/Aboutus'
import Footer from './Components/Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signin from './pages/home/login/signin'
import Signup from './pages/home/Signup'

function App() {
 

  return (
    <>
 <BrowserRouter>
        <Header />
        <Routes>         
          <Route path='/Signin' element={<Signin />}/>
          <Route path='/Signup' element={<Signup />}/>
          <Route path="/" element={<Home />} />
          <Route path="/Properties" element={<Properties />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Aboutus" element={<Aboutus />} />       
        </Routes>
        <Footer />
      </BrowserRouter>    
    
    


    </>
  )
}

export default App
