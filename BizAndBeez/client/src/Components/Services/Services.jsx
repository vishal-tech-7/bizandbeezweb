import React, { useRef, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import './Services.css'
import franchiseIcon from '../../assets/franchis- Development.png'
import digitalIcon from '../../assets/digital-marketing.png'
import startupEventsIcon from '../../assets/startup-events.png'
import startupAwardsIcon from '../../assets/startup-awards.png'
import corporateEventsIcon from '../../assets/startup-events.png'
import rightArrow from '../../assets/rightarrow.png'
import { useNavigate } from 'react-router-dom'

const Services = () => {

  const leftScroll = useRef(null)
  const rightScroll = useRef(null)

  useEffect(() => {
    ScrollReveal().reveal(leftScroll.current, {
      origin: 'left',
      distance: '50px',
      duration: 500,
      delay: 100,
      viewFactor: 0.2,
      reset: true,
      mobile: false,
    })
    ScrollReveal().reveal(rightScroll.current, {
      origin: 'right',
      distance: '50px',
      duration: 500,
      delay: 100,
      viewFactor: 0.2,
      reset: true,
      mobile: false,
    })
  }, [])

  const navigate = useNavigate()
  const handleLearnMoreFranchise =()=>{
    navigate('/services/Franchise-Development')
    window.scrollTo(0,0)
  }
  const handleLearnMoreDigitalMarketing =()=>{
    navigate('/services/Digital-Marketing')
    window.scrollTo(0,0)
  }
  const handleLearnMoreStartupEvents =()=>{
    navigate('/services/Startup-Events')
    window.scrollTo(0,0)
  }
  const handleLearnMoreStartupAwards =()=>{
    navigate('/services/Startup-Awards')
    window.scrollTo(0,0)
  }
  const handleLearnMoreCorporateEvents =()=>{
    navigate('/services/Corporate-Events')
    window.scrollTo(0,0)
  }


  return (
    <section id='services'>
      <div ref={rightScroll} className='service-head-container'>
        <h2 className='service-headingtext'>Services</h2>
        <h3 className='service-subheadingtext'>From concept to reality - Biz and Beez brings your vision to life!</h3>
      </div>
      <div ref={leftScroll} className='services-container'>
        <div className='individual-service-container'>
          <img className='serviceicon' src={franchiseIcon} alt="Franchise Development" />
          <h3 className='individualservice-headtext'>Franchise Development</h3>
          <div className='individualservice-paracontainer'>
            <p className='individualservice-paratext'>Expand your brand and reach new markets with our franchise development services.
              we help you grow your franchise with confidence and success.
            </p>
          </div>
          <button onClick={handleLearnMoreFranchise} className='learnmorebtn'>Learn More</button>
        </div>
        <div className='individual-service-container'>
          <img className='serviceicon' src={startupEventsIcon} alt="Startup Events" />
          <h3 className='individualservice-headtext'>Startup Events</h3>
          <div className='individualservice-paracontainer'>
            <p className='individualservice-paratext'>Whether it’s a launch party or a networking event, we bring your startup unforgettable! We specialize in organizing 
              impactful events  lasting impression on your target audience
            </p>
          </div>
          <button onClick={handleLearnMoreStartupEvents} className='learnmorebtn'>Learn More</button>
        </div>
        <div className='individual-service-container'>
          <img className='serviceicon' src={startupAwardsIcon} alt="Startup Awards" />
          <h3 className='individualservice-headtext'>Startup Awards</h3>
          <div className='individualservice-paracontainer'>
            <p className='individualservice-paratext'>Celebrate innovation and hard work with our startup awards services. We’ll help you startups, providing a platform for
               businesses to gain the recognition they deserve.
            </p>
          </div>
          <button onClick={handleLearnMoreStartupAwards} className='learnmorebtn'>Learn More</button>
        </div>
        <div className='individual-service-container'>
          <img className='serviceicon' src={digitalIcon} alt="Digital Marketing" />
          <h3 className='individualservice-headtext'>Digital Marketing</h3>
          <div className='individualservice-paracontainer'>
            <p className='individualservice-paratext'>Take your brand online and drive results with our tailored digital marketing services. We specialize in creating data-driven 
              strategies that increase your brand’s visibility.
            </p>
          </div>
          <button onClick={handleLearnMoreDigitalMarketing} className='learnmorebtn'>Learn More</button>
        </div>
        <div className='individual-service-container'>
          <img className='serviceicon' src={corporateEventsIcon} alt="Corporate Events" />
          <h3 className='individualservice-headtext'>Corporate Events</h3>
          <div className='individualservice-paracontainer'>
            <p className='individualservice-paratext'>Whether you're hosting a conference, team-building retreat, or gala, we design and execute corporate events that align with your 
              company’s goals and values.
            </p>
          </div>
          <button onClick={handleLearnMoreCorporateEvents} className='learnmorebtn'>Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Services