import React from 'react'
import Slideshow from '../components/Slideshow'
import ContactSection from '../components/ContactSection'
import WelcomeMessage from '../components/WelcomeMessage'
import EventsSection from '../components/EventsSection'
import EventCatalog from '../components/EventCatalog'
import AboutMain from '../components/AboutMain'
import BenefitsAndSuccess from '../components/BenefitsAndSuccess'
import CollegeModules from '../components/CollegeModules'
import FAQ from '../components/FaqSection'
import FeedbackSection from '../components/FeedbackSection'

const Home = () => {
  return (
    <>
        <WelcomeMessage/>
        <Slideshow/>
        <AboutMain/>
        <EventsSection/>
        <EventCatalog/>
        <FAQ/>
        <FeedbackSection/>
        <BenefitsAndSuccess/>
        <CollegeModules/>
        <ContactSection/>
    </>
  )
}

export default Home
