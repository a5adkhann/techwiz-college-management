import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Registeration from './pages/Registeration'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/registeration' element={<Registeration/>}></Route>
                <Route path='/gallery' element={<Gallery/>}></Route>
            </Routes>
          <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
