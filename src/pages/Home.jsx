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

const Home = ({userName, userRole}) => {
  return (
    <>
        <WelcomeMessage userName={userName} userRole={userRole}/>
        <Slideshow/>
        <AboutMain/>
        <EventsSection/>
        <EventCatalog/>
        <BenefitsAndSuccess/>
        <CollegeModules/>
        <ContactSection/>
        <FAQ/>
        <FeedbackSection/>
    </>
  )
}

export default Home
