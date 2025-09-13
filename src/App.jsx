import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Registeration from './pages/Registeration';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import EventDetail from './components/EventDetail';
import EventCalender from './pages/EventCalender';
import EventCatalog from './components/EventCatalog';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WelcomeModal from './components/WelcomeModal';
import WelcomeMessage from './components/WelcomeMessage';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const hideNavbarFooter = location.pathname === '/registeration';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedRole = localStorage.getItem("userRole");

    if (savedName && savedRole) {
      setUserName(savedName);
      setUserRole(savedRole);
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  }, []);

  const handleModalSubmit = (name, role) => {
    setUserName(name);
    setUserRole(role);

    localStorage.setItem("userName", name);
    localStorage.setItem("userRole", role);

    setIsModalOpen(false);
    navigate('/home');
  };

  
  const handleStorage = () => {
  localStorage.removeItem("userName");
  localStorage.removeItem("userRole");
  localStorage.removeItem("bookmarkedEvents");

  // reset states
  setUserName("");
  setUserRole("");
  setIsModalOpen(true);

  navigate("/"); // route reset
};


  return (
    <>
      <WelcomeModal isOpen={isModalOpen} onSubmit={handleModalSubmit} />

      {!hideNavbarFooter && !isModalOpen && <Navbar  handleStorage={handleStorage}/>}
      <Routes>
        <Route path='/home' element={<Home userName={userName} userRole={userRole} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/registeration' element={<Registeration />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/calendar' element={<EventCalender />} />
        <Route path='/events' element={<EventCatalog />} />
        <Route path='/event/:id' element={<EventDetail />} />
      </Routes>
      {!hideNavbarFooter && !isModalOpen && <Footer />}
    </>
  );
};


const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
