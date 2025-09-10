import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Registeration from './pages/Registeration'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import toast, { Toaster } from 'react-hot-toast'

const App = () => {

  const location = useLocation();

  const hideNavbarFooter = location.pathname === '/registeration';

  useEffect(() => {
    toast.success("Welcome to Campus Connect")
  }, [])

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/registeration' element={<Registeration />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
      </Routes>

      {!hideNavbarFooter && <Footer />}

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp
