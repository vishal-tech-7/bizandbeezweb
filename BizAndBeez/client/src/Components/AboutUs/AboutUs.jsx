import React, { useRef, useEffect } from 'react'
import './AboutUs.css'
import aboutUsImg from '../../assets/aboutus_img.png'
import ScrollReveal from 'scrollreveal'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {

  const leftScroll = useRef(null)
  const rightScroll = useRef(null)
  const bottomScroll = useRef(null)
  const sectionRef = useRef(null)
  const aboutUsRef = useRef(null)

  useEffect(() => {
    ScrollReveal().reveal(leftScroll.current, {
      origin: 'left',
      distance: '50px',
      duration: 500,
      delay: 100,
      viewFactor: 0.2,
      reset: true,
    })
    ScrollReveal().reveal(rightScroll.current, {
      origin: 'right',
      distance: '50px',
      duration: 500,
      delay: 100,
      viewFactor: 0.1,
      reset: true,
    })
    ScrollReveal().reveal(bottomScroll.current, {
      origin: 'bottom',
      distance: '50px',
      duration: 500,
      delay: 100,
      viewFactor: 0.1,
      reset: true,
    })
  }, [])

  const navigate = useNavigate()
  const handleLearnMoreClick =()=>{
    navigate('/AboutUs')
    window.scrollTo(0,0)
  }

  return (
    <section id='AboutUs' ref={aboutUsRef}>
      <div ref={leftScroll}>
        <h2 className='aboutus-heading'>About Us</h2>
      </div>
      <div className='aboutus-container'>
        <div ref={bottomScroll} className='aboutus-img-container'>
          <img className='aboutusimg' src={aboutUsImg} alt="" />
        </div>
        <div ref={rightScroll} className='aboutus-para-container'>
          <p className='aboutus-para'>We’re Biz and Beez – a startup marketing agency with big dreams, 
            even bigger ideas, and a passion for helping brands thrive. Whether you’re a franchise or a growing startup,
            we understand that every brand has a unique story, and we’re here to help you tell yours in the most compelling
            and impactful way. From digital marketing to corporate events, startup events, and even startup awards, our approach 
            is all about personalized service, creative thinking, and data-driven results with expert execution. We don’t just follow trends – we set them.
          </p>
          <button onClick={handleLearnMoreClick} className='aboutus-lernmore-btn'>Learn more</button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs