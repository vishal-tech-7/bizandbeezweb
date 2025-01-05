import React, { useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/AboutUs/AboutUs'
import Services from './Components/Services/Services'
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactUs from './Components/ContactUs/ContactUs'
import ClientReviews from './Components/ClientReviews/ClientReviews'
import AboutUsPage from './Pages/AboutUs/AboutUsPage'
import FranchiseDev from './Pages/ServicePages/FranchisePage/FranchiseDev'
import DigitalMarketing from './Pages/ServicePages/DigitalMarketing/DigitalMarketing.jsx'
import CreativeTeam from './Components/CreativeTeam/CreativeTeam'
import StartUpEvents from '../src/Pages/ServicePages/StartUpEvents/StartUpEvents.jsx'
import StartUpAwards from '../src/Pages/ServicePages/StartUpAwards/StartUpAwards.jsx'
import CorporateEvents from '../src/Pages/ServicePages/CorporateEvents/CorporateEvents.jsx'
import OurClients from './Components/OurClients/OurClients.jsx'





function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <Hero />
              <AboutUs />
              <Services />
              <WhyChooseUs />
              <OurClients />
              <ClientReviews />
              <CreativeTeam />
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route
          path='/AboutUs'
          element={
            <>
              <Navbar />
              <AboutUsPage />
              <ContactUs />
            </>
          }
        />
        <Route
          path='/services/Franchise-Development'
          element={
            <>
              <Navbar />
              <FranchiseDev />
              <ContactUs />
            </>
          }
        />
        <Route
          path='/services/Digital-Marketing'
          element={
            <>
              <Navbar />
              <DigitalMarketing />
              <ContactUs />
            </>
          }
        />
        <Route
          path='/services/Startup-Events'
          element={
            <>
              <Navbar />
              <StartUpEvents />
              <ContactUs />
            </>
          }
        />
        <Route
          path='/services/Startup-Awards'
          element={
            <>
              <Navbar />
              <StartUpAwards />
              <ContactUs />
            </>
          }
        />
        <Route
          path='/services/Corporate-Events'
          element={
            <>
              <Navbar />
              <CorporateEvents />
              <ContactUs />
            </>
          }
        />
      </Routes>
    </BrowserRouter>

  )
}

export default App
