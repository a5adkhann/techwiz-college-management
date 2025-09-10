import React from 'react'
import Slideshow from '../components/Slideshow'
import ContactSection from '../components/ContactSection'
import AboutSection from '../components/AboutSection'
import WelcomeMessage from '../components/WelcomeMessage'
import EventsSection from '../components/EventsSection'
import EventCatalog from '../components/EventCatalog'

const Home = () => {
  return (
    <>
        <WelcomeMessage/>
        <Slideshow/>
        <AboutSection/>
        <EventsSection/>
        <EventCatalog/>
        <ContactSection/>
    </>
  )
}

export default Home
