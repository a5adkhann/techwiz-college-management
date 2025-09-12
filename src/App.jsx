import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Registeration from './pages/Registeration'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import EventDetail from './components/EventDetail'
import EventCalender from './pages/EventCalender'
import EventCatalog from './components/EventCatalog'
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {

  const location = useLocation();

  const hideNavbarFooter = location.pathname === '/registeration';

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // re-trigger animations when route changes
  }, [location.pathname]);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/registeration' element={<Registeration />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/calendar' element={<EventCalender />}></Route>
        <Route path='/events' element={<EventCatalog />}></Route>
        <Route path='/event/:id' element={<EventDetail />}></Route>
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </>
  )
}

const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp
